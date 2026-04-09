"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function TutorFAB() {
  const pathname = usePathname();
  if (pathname === "/tutor") return null;

  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-full max-w-[480px] pointer-events-none z-40">
      <div className="absolute bottom-0 right-4 pointer-events-auto animate-bounce-soft">
        <Link
          href="/tutor"
          className="relative flex items-center justify-center w-[68px] h-[68px] rounded-full"
          style={{
            boxShadow: "0 8px 24px rgba(249, 115, 22, 0.35), 0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          {/* Basketball SVG */}
          <svg
            width="68"
            height="68"
            viewBox="0 0 68 68"
            className="absolute inset-0"
          >
            <defs>
              <radialGradient id="ball-grad" cx="40%" cy="35%" r="55%">
                <stop offset="0%" stopColor="#F5923A" />
                <stop offset="50%" stopColor="#E8751A" />
                <stop offset="100%" stopColor="#A04A08" />
              </radialGradient>
            </defs>

            {/* Ball base */}
            <circle cx="34" cy="34" r="33" fill="url(#ball-grad)" />

            {/* Subtle highlight */}
            <ellipse cx="28" cy="24" rx="14" ry="10" fill="white" opacity="0.08" />

            {/* Seam lines */}
            <g stroke="#5C2800" strokeWidth="1.8" fill="none" strokeLinecap="round">
              <path d="M34 1 C28 18, 28 50, 34 67" />
              <path d="M1 34 C18 28, 50 28, 67 34" />
              <path d="M8 18 C16 24, 22 16, 18 8" />
              <path d="M60 50 C52 44, 46 52, 50 60" />
              <path d="M50 8 C44 16, 52 22, 60 18" />
              <path d="M18 60 C24 52, 16 46, 8 50" />
            </g>
          </svg>

          {/* Mic icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="relative z-10"
            style={{
              filter: "drop-shadow(1px 2px 1px rgba(60, 20, 0, 0.6))",
            }}
          >
            <rect x="9" y="1" width="6" height="12" rx="3" fill="white" />
            <path d="M5 10a7 7 0 0 0 14 0" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
            <line x1="12" y1="17" x2="12" y2="21" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <line x1="8" y1="21" x2="16" y2="21" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </Link>

        {/* Glow shadow underneath */}
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-3 rounded-full blur-md"
          style={{ background: "rgba(249, 115, 22, 0.3)" }}
        />
      </div>
    </div>
  );
}
