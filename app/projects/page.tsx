import { playfair, signature } from "@/app/ui/fonts";

export default function Projects() {
  return (
    <div className="bg-[#DDC7A0] h-screen w-screen">
      <div className="grid place-items-center min-h-screen min-w-screen">  
        <div className="w-fit text-[clamp(30px,10vw,6000px)]">
          <h2 className={`${playfair.className} text-black text-left text-[0.25em]`}>Projects Page</h2>
        </div>
      </div>
    </div>
  );
}
