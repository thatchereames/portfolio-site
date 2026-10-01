import { Mrs_Saint_Delafield, Playfair_Display, News_Cycle, Rozha_One } from 'next/font/google';
import localFont from 'next/font/local';

export const signature = localFont({
    src: '../fonts/Thesignature.woff2',
    variable: '--font-signature',
});

export const delafield = Mrs_Saint_Delafield({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-delafield',
});

export const playfair = Playfair_Display({
    weight: ['400', '600', '800'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-playfair',
});

export const newsCycle = News_Cycle({
    weight: ['400', '700'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-news-cycle',
});

export const rozhaOne = Rozha_One({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-rozha-one',
});