'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { playfair } from '@/app/ui/fonts';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  AnimatedUnderline1,
  AnimatedUnderline2,
  AnimatedUnderline3,
  AnimatedUnderline4,
  AnimatedUnderline5,
} from './underline';

const animatedUnderlines = [
  AnimatedUnderline1,
  AnimatedUnderline2,
  AnimatedUnderline3,
  AnimatedUnderline4,
  AnimatedUnderline5,
];

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className='flex items-center gap-6 md:gap-8 lg:gap-12 w-fit'>
      {links.map((link, index) => {
        const AnimatedUnderline = animatedUnderlines[index];
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${playfair.className} text-xl md:text-2xl lg:text-3xl font-semibold text-left ${
              isActive ? 'cursor-default' : 'transition-opacity hover:opacity-80'
            }`}
          >
            <AnimatedUnderline isActive={isActive}>
              <span className='inline-block px-3 py-1'>{link.name}</span>
            </AnimatedUnderline>
          </Link>
        );
      })}
    </nav>
  );
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [bgOffsetY, setBgOffsetY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const updateOffset = () => {
        // 5 links * 48px + 4 gaps * 48px = 432px total nav height
        const navTop = Math.floor((window.innerHeight - 432) / 2);
        setBgOffsetY(((navTop % 48) + 48) % 48);
      };
      updateOffset();
      window.addEventListener('resize', updateOffset);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('resize', updateOffset);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        className={`${playfair.className} sketchy-border bg-transparent flex items-center justify-center text-xl sm:text-2xl font-semibold tracking-wide text-[#181514] px-7 py-2.5 sm:px-8 sm:py-3 transition-transform active:scale-95 cursor-pointer relative z-50`}
      >
        <AnimatePresence mode='wait' initial={false}>
          <motion.span
            key={isOpen ? 'close' : 'menu'}
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeInOut' }}
            className='inline-block select-none'
          >
            {isOpen ? 'Close' : 'Menu'}
          </motion.span>
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            style={{
              originY: 0,
              backgroundImage: `
                linear-gradient(to right, #959592 1px, transparent 1px),
                linear-gradient(to bottom, #959592 1px, transparent 1px)
              `,
              backgroundSize: '48px 48px',
              backgroundPosition: `center ${bgOffsetY}px`,
            }}
            className='fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#b0b0ad] text-[#181514] px-6'
          >
            <motion.nav
              initial='closed'
              animate='open'
              exit='closed'
              style={{ height: '432px' }}
              className='flex flex-col items-center justify-between'
            >
              {links.map((link, i) => {
                const isActive = pathname === link.href;

                return (
                  <motion.div
                    key={link.name}
                    variants={{
                      closed: { opacity: 0, y: 16 },
                      open: {
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.15 + i * 0.05, duration: 0.35 },
                      },
                    }}
                    className='h-12 flex items-end justify-center'
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`${playfair.className} text-[40px] sm:text-[44px] font-semibold tracking-tight leading-none -translate-y-px inline-block ${
                        isActive
                          ? 'marker-highlight cursor-default'
                          : 'hover:opacity-70 transition-opacity'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
