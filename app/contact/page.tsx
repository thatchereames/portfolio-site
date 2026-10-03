import { playfair } from '@/app/ui/fonts';

export default function Contact() {
  return (
    <div className='w-full min-h-[100dvh] flex justify-center px-4 sm:px-6 md:px-8'>
      <div className='w-full max-w-3xl pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-24'>  
        <div className='mb-8 sm:mb-12'>
          <h1 className={`${playfair.className} text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171a21]`}>
            Contact Me
          </h1>
        </div>
        <div className='sketchy-border p-6 sm:p-8 md:p-12 rotate-1 relative max-w-2xl bg-[#DDC7A0]/50 mx-auto'>
          <div className='tape tape-top-center'></div>
          <h2 className={`${playfair.className} font-semibold pt-2 pb-1 text-2xl sm:text-3xl text-[#171a21]`}>
            Email
          </h2>
          <p className='font-medium text-lg sm:text-xl md:text-2xl mb-6'>
            <a 
              href='mailto:thatcher.eames@gmail.com' 
              className='underline break-all sm:break-normal hover:opacity-75 transition-opacity'
            >
              thatcher.eames@gmail.com
            </a>
          </p>
          <h2 className={`${playfair.className} font-semibold pt-4 pb-1 text-2xl sm:text-3xl text-[#171a21]`}>
            LinkedIn
          </h2>
          <p className='font-medium text-lg sm:text-xl md:text-2xl'>
            <a 
              href='https://www.linkedin.com/in/thatchereames/' 
              target='_blank'
              rel='noreferrer'
              className='underline break-all sm:break-normal hover:opacity-75 transition-opacity'
            >
              linkedin.com/in/thatchereames
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
