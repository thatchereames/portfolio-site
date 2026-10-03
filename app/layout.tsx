import type { Metadata } from 'next';
import { playfair, newsCycle } from '@/app/ui/fonts';
import './globals.css';
import { Nav, MobileNav } from './ui/navigation/nav';

export const metadata: Metadata = {
  title: "Thatcher's Portfolio",
  description: 'The software and experience of Thatcher Eames',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className='h-full antialiased'
    >
      <body className={`${newsCycle.className} ${playfair.variable} ${newsCycle.variable} bg-[#DDC7A0] text-[#141111] min-h-screen w-full overflow-x-hidden has-[.scrolless]:overflow-hidden`}>
        {/* Desktop Navigation */}
        <header className='hidden md:flex absolute top-0 inset-x-0 z-40 justify-center pt-6 lg:pt-8'>
          <Nav />
        </header>

        {/* Mobile Navigation Button */}
        <div className='md:hidden fixed top-6 inset-x-0 z-50 flex justify-end px-6 sm:px-8 pointer-events-none'>
          <div className='pointer-events-auto'>
            <MobileNav />
          </div>
        </div>

        <main className='w-full'>
          {children}
        </main>
      </body>
    </html>
  );
}
