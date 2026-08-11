import { playfair, signature } from '@/app/ui/fonts';

export default function About() {
  return (
    <div className='h-screen w-screen'>
      <div className='grid place-items-center w-full h-full'>  
        <div className='w-fit text-[clamp(30px,10vw,6000px)]'>
          <h2 className={`${playfair.className}text-left text-[0.25em]`}>About Page</h2>
        </div>
      </div>
    </div>
  );
}
