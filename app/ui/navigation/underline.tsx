"use client";

import { motion } from "motion/react";

interface UnderlineProps {
  children: React.ReactNode;
  isActive?: boolean;
}

function BaseUnderline({
  children,
  pathD,
  isActive = false,
}: {
  children: React.ReactNode;
  pathD: string;
  isActive?: boolean;
}) {
  return (
    <motion.span className="group relative inline-block">
      {children}
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 960 380"
        preserveAspectRatio="none"
        fill="none"
        className="pointer-events-none absolute left-0 top-full h-[.8em] w-full"
      >
        <motion.path
          d={pathD}
          pathLength="1"
          stroke="#181514"
          strokeWidth="25"
          strokeLinecap="round"
          vectorEffect="scaling-stroke"
          className={
            isActive
              ? "underline-path-active"
              : "underline-path underline-path-hoverable"
          }
        />
      </motion.svg>
    </motion.span>
  );
}

// 1. The Original Scribble Underline
export function AnimatedUnderline1({ children, isActive }: UnderlineProps) {
  return (
    <BaseUnderline isActive={isActive} pathD="M 26 134 C 77 114 183 112 328 126 C 495 148 673 148 783 133 C 1046 100 940 30 780 63 C 564 103 459 214 216 264 C 21 300 23 211 182 202 C 432 192 671 210 801 236 C 930 260 898 181 804 193 C 657 211 564 232 376 329">
      {children}
    </BaseUnderline>
  );
}

// 2. A Single Swoosh Underline
export function AnimatedUnderline2({ children, isActive }: UnderlineProps) {
  return (
    <BaseUnderline isActive={isActive} pathD="M18 258C-8 385 121 205 220 87 418-158 92 458 200 314 307 153 445 65 410 196 366 360 501 140 1055 148">
      {children}
    </BaseUnderline>
  );
}

// 4. A Wavy Underline
export function AnimatedUnderline3({ children, isActive }: UnderlineProps) {
  return (
    <BaseUnderline isActive={isActive} pathD="M 12 249 C 148 239 284 181 371 86 C 494 -50 249 80 162 202 C 110 266 185 246 400 156 C 642 47 645 53 502 149 C 359 252 689 237 1303 150">
      {children}
    </BaseUnderline>
  );
}

// 3. A Double Underline
export function AnimatedUnderline4({ children, isActive }: UnderlineProps) {
  return (
    <BaseUnderline isActive={isActive} pathD="M 39 179 C 145 178 459 216 674 123 C 975 -29 249 106 105 271 C 49 336 75 324 228 269 C 509 190 760 164 1079 146">
      {children}
    </BaseUnderline>
  );
}

// 5. Triple Sketch Underline (drawn sequentially)
export function AnimatedUnderline5({ children, isActive }: UnderlineProps) {
  const segments = [
    { d: "M 15 82 C 175 146 251 33 709 49", cls: "underline-seg-1" },
    { d: "M 138 144 C 344 181 503 70 776 84", cls: "underline-seg-2" },
    { d: "M 343 201 C 470 268 584 126 993 110", cls: "underline-seg-3" },
  ];

  return (
    <motion.span className="group relative inline-block">
      {children}
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 960 380"
        preserveAspectRatio="none"
        fill="none"
        className="pointer-events-none absolute left-0 top-full h-[.8em] w-full"
      >
        {segments.map((seg, idx) => (
          <motion.path
            key={idx}
            d={seg.d}
            pathLength="1"
            stroke="#181514"
            strokeWidth="25"
            strokeLinecap="round"
            vectorEffect="scaling-stroke"
            className={
              isActive
                ? "underline-path-active"
                : `underline-path underline-path-hoverable ${seg.cls}`
            }
          />
        ))}
      </motion.svg>
    </motion.span>
  );
}
