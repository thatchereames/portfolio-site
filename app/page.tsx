import { playfair, signature, newsCycle } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='scrolless h-screen w-screen overflow-hidden'>
      <div className='grid place-items-center min-h-screen min-w-screen'>  
        <div className='flex flex-row items-center'>
          <div className='w-fit text-[clamp(80px,10vw,6000px)]'>
            <h2 className={`${newsCycle.className} text-left text-[0.25em]`}>hi, my name is</h2>
            <h1 className={`${signature.className} text-[#171a21] text-[1em] text-center  h-fit -mt-2 antialiased`}>Thatcher Eames</h1>
          </div>
          <div className='relative inline-block'>
            <Image 
              className='pl-5 -mr-20 w-[35vw] max-w-100 mix-blend-multiply'
              src="/profile.webp" 
              width={800}
              height={1100}
              sizes="(max-width: 768px) 35vw, (max-width: 1200px) 35vw, 400px"
              alt='Sketch of Thatcher'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
