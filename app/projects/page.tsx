import { playfair } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Projects() {
  return (
    <div className='w-full min-h-[100dvh] flex justify-center px-4 sm:px-6 md:px-8'>
      <div className='w-full max-w-5xl pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-24'>  
        <div className='mb-8 sm:mb-12'>
          <h1 className={`${playfair.className} text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171a21]`}>
            Projects
          </h1>
        </div>
        
        <div className='flex flex-col gap-12 sm:gap-16 md:gap-24'>
          {/* Mojo Dojo Multiply */}
          <div className='grid grid-cols-1 md:grid-cols-[minmax(0,1.15fr)_minmax(240px,0.85fr)] items-center gap-8 sm:gap-10 md:gap-12'>
            <div className='sketchy-border p-5 sm:p-7 md:p-10 relative bg-[#DDC7A0]/40 backdrop-blur-[1px] order-1 md:order-none'>
              <h2 className={`${playfair.className} font-semibold pb-2 text-2xl sm:text-3xl text-[#171a21]`}>
                Mojo Dojo Multiply
              </h2>
              <div className='flex flex-wrap gap-4 underline pb-4 font-bold text-sm sm:text-base text-[#141111]'>
                <a 
                  href='https://github.com/thatchereames/mojo-dojo-multiply' 
                  target='_blank' 
                  rel='noreferrer' 
                  className='hover:opacity-75 transition-opacity'
                >
                  GitHub Repo
                </a>
                <a 
                  href='https://main.d1txqz2pehfgs1.amplifyapp.com/' 
                  target='_blank' 
                  rel='noreferrer' 
                  className='hover:opacity-75 transition-opacity'
                >
                  Hosted Site
                </a>
              </div>
              <ul className='list-disc pl-5 sm:pl-6 font-semibold space-y-1.5 sm:space-y-2 text-sm sm:text-base md:text-lg text-[#141111]/90'>
                <li>Developed in a software team of 5</li>
                <li>Organized using Agile Methodologies</li>
                <li>TypeScript with Konva visuals</li>
                <li>JSON/local-storage persistence</li>
                <li>Structured for future database integration</li>
              </ul>
            </div>
            <div className='physical-photo rotate-1 sm:rotate-2 mx-auto w-full max-w-sm sm:max-w-md md:max-w-none order-2 md:order-none'>
              <div className='tape tape-top-center'></div>
              <Image 
                src='/mojodojo.jpg' 
                alt='Mojo Dojo Multiply Screenshot' 
                width={800} 
                height={450} 
                className='w-full h-auto object-cover' 
              />
            </div>
          </div>

          {/* Personal Portfolio Site */}
          <div className='grid grid-cols-1 md:grid-cols-[minmax(240px,0.85fr)_minmax(0,1.15fr)] items-center gap-8 sm:gap-10 md:gap-12'>
            <div className='physical-photo -rotate-1 sm:-rotate-2 mx-auto w-full max-w-sm sm:max-w-md md:max-w-none order-2 md:order-none'>
              <div className='tape tape-top-center'></div>
              <Image 
                src='/portfolio.jpg' 
                alt='Portfolio Site Screenshot' 
                width={800} 
                height={450} 
                className='w-full h-auto object-cover' 
              />
            </div>
            <div className='sketchy-border p-5 sm:p-7 md:p-10 relative bg-[#DDC7A0]/40 backdrop-blur-[1px] order-1 md:order-none'>
              <h2 className={`${playfair.className} font-semibold pb-2 text-2xl sm:text-3xl text-[#171a21]`}>
                Personal Portfolio Site
              </h2>
              <div className='flex flex-wrap gap-4 underline pb-4 font-bold text-sm sm:text-base text-[#141111]'>
                <a 
                  href='https://github.com/thatchereames/portfolio-site' 
                  target='_blank' 
                  rel='noreferrer' 
                  className='hover:opacity-75 transition-opacity'
                >
                  GitHub Repo
                </a>
                <a 
                  href='https://thatchereames.com/' 
                  target='_blank' 
                  rel='noreferrer' 
                  className='hover:opacity-75 transition-opacity'
                >
                  Hosted Site
                </a>
              </div>
              <ul className='list-disc pl-5 sm:pl-6 font-semibold space-y-1.5 sm:space-y-2 text-sm sm:text-base md:text-lg text-[#141111]/90'>
                <li>Next.js Framework website</li>
                <li>Coded in React</li>
                <li>Utilizes Motion library</li>
                <li>Hosted using AWS Amplify</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
