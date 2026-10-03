import { signature, newsCycle } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='scrolless min-h-dhv w-full overflow-hidden flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 md:py-0'>
      <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-2 lg:gap-6 max-w-6xl w-full'>
        <div className='w-[90vw] max-w-[90vw] md:w-fit text-center select-none'>
          <h2 className={`${newsCycle.className} text-xl sm:text-2xl md:text-xl lg:text-2xl text-[#141111]/80 tracking-wide mb-1 sm:mb-2 text-center`}>
            hi, my name is
          </h2>
          <h1 className={`${signature.className} text-[#171a21] text-[clamp(3.2rem,15.2vw,5.8rem)] md:text-[clamp(3.2rem,8.5vw,7.5rem)] whitespace-nowrap leading-[0.85] sm:leading-[0.9] -mt-1 md:-mt-2 antialiased text-center`}>
            Thatcher Eames
          </h1>
        </div>
        <div className='relative flex items-center justify-center'>
          <Image 
            className='w-44 sm:w-52 md:w-[20vw] lg:w-[22vw] max-w-xs md:max-w-65 lg:max-w-72.5 md:-mr-8 lg:-mr-10 md:pl-3 mix-blend-multiply drop-shadow-sm transition-all'
            src="/profile.webp" 
            width={800}
            height={1100}
            priority
            sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, (max-width: 1200px) 22vw, 300px"
            alt='Sketch of Thatcher'
          />
        </div>
      </div>
    </div>
  );
}
