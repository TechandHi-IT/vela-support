"use server";

import nodemailer from "nodemailer";

const recipient = "info@velasupport.co.uk";
const services = [
  "Executive PA & Diary Management",
  "Event Planning and Management",
  "Business Optimisation",
  "Event Hosting and Representation",
] as const;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<
    "fullName" | "email" | "phone" | "serviceType" | "requirements",
    string
  >>;
};

function readField(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContact(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const fullName = readField(formData, "fullName");
  const email = readField(formData, "email");
  const phone = readField(formData, "phone");
  const serviceType = readField(formData, "serviceType");
  const requirements = readField(formData, "requirements");
  const honeypot = readField(formData, "companyWebsite");
  const fieldErrors: NonNullable<ContactFormState["fieldErrors"]> = {};

  if (honeypot) {
    return {
      status: "error",
      message: "We couldn't process this submission. Please try again.",
    };
  }

  if (
    !fullName ||
    fullName.length > 120 ||
    /[\u0000-\u001f\u007f]/.test(fullName)
  ) {
    fieldErrors.fullName = "Enter your name (up to 120 characters).";
  }
  if (
    !email ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    fieldErrors.email = "Enter a valid email address.";
  }
  if (!phone || phone.length > 40 || /[\u0000-\u001f\u007f]/.test(phone)) {
    fieldErrors.phone = "Enter your phone number (up to 40 characters).";
  }
  if (!services.some((service) => service === serviceType)) {
    fieldErrors.serviceType = "Choose a service from the list.";
  }
  if (!requirements || requirements.length > 5000) {
    fieldErrors.requirements =
      "Describe your requirements (up to 5,000 characters).";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please review the highlighted fields.",
      fieldErrors,
    };
  }

  const host = process.env.SMTP_HOST;
  const portValue = process.env.SMTP_PORT;
  const port = Number(portValue);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (
    !host ||
    !portValue ||
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535 ||
    !user ||
    !pass
  ) {
    console.error("Contact form SMTP configuration is incomplete.");
    return {
      status: "error",
      message:
        "The consultation form is temporarily unavailable. Please email info@velasupport.co.uk.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Vela Support website" <${user}>`,
      to: recipient,
      replyTo: { name: fullName, address: email },
      subject: `Confidential consultation enquiry: ${serviceType}`,
      text: [
        "New confidential consultation enquiry",
        "",
        `Full name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Service: ${serviceType}`,
        "",
        "Requirements:",
        requirements,
      ].join("\n"),
    });
  } catch (error) {
    console.error("Unable to send Vela Support consultation enquiry.", error);
    return {
      status: "error",
      message:
        "We couldn't send your enquiry just now. Please email info@velasupport.co.uk.",
    };
  }

  return {
    status: "success",
    message:
      "Thank you. Your confidential enquiry has been sent to Vela Support.",
  };
}
