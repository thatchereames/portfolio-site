import { playfair, signature } from '@/app/ui/fonts';

export default function Home() {
  return (
    <div className='scrolless h-screen w-screen overflow-hidden'>
      <div className='grid place-items-center min-h-screen min-w-screen'>  
        <div className='w-fit text-[clamp(80px,10vw,6000px)]'>
          <h2 className={`${playfair.className} text-left text-[0.25em]`}>hi, my name is</h2>
          <h1 className={`${signature.className} text-[#171a21] text-[1em] text-center  h-fit -mt-2 antialiased`}>Thatcher Eames</h1>
        </div>
      </div>
    </div>
  );
}
