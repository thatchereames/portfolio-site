import { Mrs_Saint_Delafield, Playfair_Display } from 'next/font/google';
import localFont from 'next/font/local';

export const signature = localFont({
    src: '../fonts/Thesignature.woff2',
});

export const delafield = Mrs_Saint_Delafield({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
});

export const playfair = Playfair_Display({
    weight: ['400', '600', '800'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})