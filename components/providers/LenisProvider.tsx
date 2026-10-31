"use client";

import type { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

export function LenisProvider({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <ReactLenis
      root
      options={{ autoRaf: true, lerp: 0.08, smoothWheel: true, wheelMultiplier: 0.9 }}
    >
      {children}
    </ReactLenis>
  );
}
