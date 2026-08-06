"use client";

import { useState } from "react";

export function AnimatedUnderline({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    >
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 960 380"
        preserveAspectRatio="none"
        fill="none"
        className="pointer-events-none absolute left-0 top-full h-[.8em] w-full"
      >
        <path
          d="M26 134
            C77 114 183 112 328 126 
            C495 148 673 148 783 133 
            C1046 100 940 30 780 63 
            C564 103 459 214 216 264 
            C21 300 23 211 182 202 
            C432 192 671 210 801 236 
            C930 260 912 188 798 213 
            C673 253 378 266 206 326 
            C105 361 144 372 319 351 
            460 332 818 283 964 411"
          pathLength="1"
          stroke="currentColor"
          strokeWidth="25"
          strokeLinecap="round"
          vectorEffect="scaling-stroke"
          className={`[stroke-dasharray:1] transition-[stroke-dashoffset] duration-500 ease-in-out ${
            active ? "[stroke-dashoffset:0]" : "[stroke-dashoffset:1]"
          }`}
        />
      </svg>
    </span>
  );
}
