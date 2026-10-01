import { playfair, signature } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Projects() {
  return (
    <div className='w-screen flex flex-row justify-center overflow-scroll'>
      <div className='pt-[15%] md:w-[60%] w-[70%] md:mr-[10%] pb-[15%]'>  
        <div className='w-full max-w-4xl'>
          <div className='relative w-fit text-[clamp(30px,15vw,6000px)] mb-12'>
            <h2 className={`${playfair.className} text-left text-[0.25em]`}>Projects</h2>
          </div>
          
          <div className='text-2xl flex flex-col gap-16'>
            <div>
              <div className='sketchy-border p-6 md:p-10 -rotate-1 relative'>
                <div className='tape tape-top-center'></div>
                <h3 className='font-semibold pb-2 text-3xl'>
                  Mojo Dojo Multiply
                </h3>
                <div className='flex flex-row space-x-5 underline pb-4 font-bold'>
                  <a href='https://github.com/thatchereames/mojo-dojo-multiply'>GitHub Repo</a>
                  <a href='https://main.d1txqz2pehfgs1.amplifyapp.com/'>Hosted Site</a>
                </div>
                <div className='physical-photo my-8 rotate-2 mx-auto max-w-lg'>
                  <div className='tape tape-top-center'></div>
                  <Image src='/mojodojo.jpg' alt='Mojo Dojo Multiply Screenshot' width={800} height={450} className='w-full h-auto object-cover opacity-90' />
                </div>
                <ul className='list-disc pl-6 font-bold space-y-2'>
                  <li>Developed in a software team of 5 using Agile Methodologies</li>
                  <li>TypeScript with Konva visuals</li>
                  <li>JSON/local-storage persistence</li>
                  <li>Structured for future database integration</li>
                </ul>
              </div>
            </div>
            
            <div className='sketchy-border p-6 md:p-10 rotate-1 relative'>
              <div className='tape tape-top-center'></div>
              <h3 className='font-semibold pb-2 text-3xl'>
                Personal Portfolio Site
              </h3>
              <div className='flex flex-row space-x-5 underline pb-4 font-bold'>
                <a href='https://github.com/thatchereames/portfolio-site'>GitHub Repo</a>
                <a href='https://thatchereames.com/'>Hosted Site</a>
              </div>
              <div className='physical-photo my-8 -rotate-1 mx-auto max-w-lg'>
                <div className='tape tape-top-center'></div>
                <Image src='/portfolio.jpg' alt='Portfolio Site Screenshot' width={800} height={450} className='w-full h-auto object-cover opacity-90' />
              </div>
              <ul className='list-disc pl-6 font-bold space-y-2'>
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
