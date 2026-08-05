import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./ui/navigation/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thatcher's Portfolio",
  description: "The software and experience of Thatcher Eames",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased bg-[#DDC7A0]`}
    >
      <body className="min-h-full w-screen has-[.scrolless]:overflow-hidden">
        <div className="absolute w-full h-min bg-[#DDC7A0] grid place-items-center pt-[1.5em] font-semibold text-[clamp(5px,3vw,30px)] ">
          <Nav />
        </div>
        {children}
      </body>
    </html>
  );
}
