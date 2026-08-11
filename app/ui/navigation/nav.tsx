'use client';

import Link from 'next/link';
import { playfair } from '../fonts';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedUnderline } from './underline';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export function Nav() {
  return (
    <div className='flex gap-10 w-fit'>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${playfair.className}text-left`}
          >
            <AnimatedUnderline>
              <p className='hidden md:block px-[0.75em]'>{link.name}</p>
            </AnimatedUnderline>
          </Link>
        );
      })}
    </div>
  );
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
    
  return (
    <> 
      <button 
        onClick={() => setIsOpen((prev) => !prev) }
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close' : 'Menu'}
        className={`${playfair.className} flex-col items-center justify-center gap-1.5 text-[#181514] relative z-49`}
      >
        <AnimatePresence mode='wait' initial={false}>
          <motion.span
            key={isOpen ? 'close' : 'menu'}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className='inline-block'
          >
            {isOpen ? 'Close' : 'Menu'}
          </motion.span>
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            style={{ originY: 0 }}
            className='fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#b0b0ad] bg-[linear-gradient(to_right,#959592_1px,transparent_1px),linear-gradient(to_bottom,#959592_1px,transparent_1px)] bg-size-[24px_24px] text-[#181514]'
          >
            <motion.nav
              initial='closed'
              animate='open'
              exit='closed'
              className='flex flex-col items-center gap-[1em]'
            >
              {links.map((link, i) =>(
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  variants={{
                    closed: { opacity: 0, y: 24 },
                    open: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.25 + i * 0.07, duration: 0.4 }
                    },
                  }}
                  className={`${playfair.className} text-2xl font-semibold tracking-tight sm:text-6xl`}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
