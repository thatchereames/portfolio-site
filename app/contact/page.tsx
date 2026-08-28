import { playfair, signature } from '@/app/ui/fonts';

export default function Contact() {
  return (
    <div className='w-screen flex flex-row justify-center overflow-scroll'>
      <div className='pt-[15%] md:w-[60%] w-[70%] md:mr-[10%] pb-[15%]'>  
        <div className='w-fit text-[clamp(30px,15vw,6000px)]'>
          <h2 className={`${playfair.className}text-left text-[0.25em]`}>Contact Me</h2>
        </div>
        <div className='text-2xl [&>p]:font-medium [&>h3]:font-semibold [&>h3]:pt-6 [&>h3]:pb-4'>
          <h3 className='pt-4'>
            Email:
          </h3>
          <p>
            thatcher.eames@gmail.com
          </p>
          <h3>
            LinkedIn:
          </h3>
          <a href='https://www.linkedin.com/in/thatchereames/'>
            linkedin.com/in/thatchereames
          </a>
        </div>
      </div>
    </div>
  );
}
