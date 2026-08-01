import Image from "next/image";
import { playfair, signature } from "@/app/ui/fonts";

export default function Home() {
  return (
    <div className="bg-[#EEDEC5] h-screen w-screen overflow-hidden">
      <div className="grid place-items-center min-h-screen min-w-screen">  
        <div className="w-fit text-[clamp(30px,15vw,6000px)]">
          <h2 className={`${playfair.className} text-black text-left times-new text-[0.25em]`}>hi, my name is</h2>
          <h1 className={`${signature.className} text-black text-[1em] text-center  h-fit -mt-2`}>Thatcher Eames</h1>
        </div>
      </div>
    </div>
  );
}
