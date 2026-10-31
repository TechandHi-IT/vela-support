import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LenisProvider } from "@/components/providers/LenisProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vela Support | Executive & Lifestyle Support",
  description:
    "Vela Support provides executive and lifestyle assistance with clear responsibilities, considered capacity and professional delivery.",
  icons: {
    icon: "/vela-sail.png",
    apple: "/vela-sail.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <LenisProvider>
          <Header />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
