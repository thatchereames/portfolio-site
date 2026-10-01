import type { Metadata } from 'next';
import { playfair, newsCycle } from '@/app/ui/fonts';
import './globals.css';
import { Nav, MobileNav } from './ui/navigation/nav';
import PaperOverlay from './ui/navigation/overlay';

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
      className={`h-full antialiased`}
    >
      <body className={`${newsCycle.className} ${playfair.variable} ${newsCycle.variable} bg-[#DDC7A0] text-[#141111] min-h-screen min-w-screen has-[.scrolless]:overflow-hidden`}>
        <div className='absolute md:block w-full h-min grid place-items-center pt-[1.5em] font-semibold text-[clamp(5px,3vw,30px)]'>
          <Nav />
        </div>
        <div className={`absolute w-screen md:hidden grid place-items-center pt-[1.2em] font-semibold text-[clamp(5px,8vw,30px)]`}>
          <MobileNav />
        </div>
        {children}
        {/* <PaperOverlay /> */}
      </body>
    </html>
  );
}
