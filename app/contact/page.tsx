import { playfair, signature } from '@/app/ui/fonts';

export default function Contact() {
  return (
    <div className='w-screen flex flex-row justify-center overflow-scroll'>
      <div className='pt-[15%] md:w-[60%] w-[70%] md:mr-[10%] pb-[15%]'>  
        <div className='relative w-fit text-[clamp(30px,15vw,6000px)] mb-12'>
          <h2 className={`${playfair.className} text-left text-[0.25em]`}>Contact Me</h2>
        </div>
        <div className='text-2xl sketchy-border p-8 md:p-12 rotate-1 relative max-w-2xl bg-[#DDC7A0]/50'>
          <div className='tape tape-top-center'></div>
          <h3 className='font-semibold pt-2 pb-2 text-3xl'>
            Email
          </h3>
          <p className='font-medium mb-6'>
            <a href='mailto:thatcher.eames@gmail.com' className='underline'>thatcher.eames@gmail.com</a>
          </p>
          <h3 className='font-semibold pt-4 pb-2 text-3xl'>
            LinkedIn
          </h3>
          <p className='font-medium'>
            <a href='https://www.linkedin.com/in/thatchereames/' className='underline'>
              linkedin.com/in/thatchereames
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
