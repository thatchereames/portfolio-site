"use client";

import { motion, useScroll, useTransform } from 'motion/react';

const TILE = 256;

const grain = `
<svg xmlns="http://www.w3.org/2000/svg" width="${TILE}" height="${TILE}">
  <filter id="g">
    <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch"/>
    <feColorMatrix type="saturate" values="0"/>
    <feComponentTransfer>
      <feFuncA type="linear" slope="0" intercept="1"/>
      <feFuncR type="linear" slope="2.2" intercept="-0.6"/>
      <feFuncG type="linear" slope="2.2" intercept="-0.6"/>
      <feFuncB type="linear" slope="2.2" intercept="-0.6"/>
    </feComponentTransfer>
  </filter>
  <rect width="100%" height="100%" filter="url(#g)"/>
</svg>`;

const fibers = `
<svg xmlns="http://www.w3.org/2000/svg" width="${TILE}" height="${TILE}">
  <filter id="f">
    <feTurbulence type="fractalNoise" baseFrequency="0.02 0.55"
                  numOctaves="2" stitchTiles="stitch" result="h"/>
    <feTurbulence type="fractalNoise" baseFrequency="0.55 0.02"
                  numOctaves="2" stitchTiles="stitch" seed="7" result="v"/>
    <feBlend in="h" in2="v" mode="multiply" result="mix"/>
    <feColorMatrix in="mix" type="saturate" values="0"/>
  </filter>
  <rect width="100%" height="100%" filter="url(#f)"/>
</svg>`;

const toUrl =  (svg: string) =>
  `url("data:image/svg+xml,${encodeURIComponent(svg.trim())}")`;

export default function PaperOverlay() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (v) => (-v % TILE));

  return (
    <div className = 'pointer-events-none fixed inset-0 z-50 overflow-hidden'>
      <motion.div
        style={{
          y,
          height: `calc(100% + ${TILE}px)`,
          backgroundImage: toUrl(grain),
          backgroundSize: `${TILE}px ${TILE}px`,
          opacity: 0.10,
        }}
        className='absolute inset-x-0 top-0 mix-blend-overlay'
      />
      <motion.div
        style={{
          y,
          height: `calc(100% + ${TILE}px)`,
          backgroundImage: toUrl(fibers),
          backgroundSize: `${TILE}px ${TILE}px`,
          opacity: 0.10,
        }}
        className='absolute inset-x-0 top-0 mix-blend-overlay'
      />
    </div>
  );
}