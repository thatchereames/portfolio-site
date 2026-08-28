import { playfair, signature } from '@/app/ui/fonts';

export default function Projects() {
  return (
    <div className='w-screen flex flex-row justify-center overflow-scroll'>
      <div className='pt-[15%] md:w-[60%] w-[70%] md:mr-[10%] pb-[15%]'>  
        <div className='w-fit text-[clamp(30px,10vw,6000px)]'>
          <div className='w-fit text-[clamp(30px,15vw,6000px)]'>
          <h2 className={`${playfair.className}text-left text-[0.25em]`}>Projects</h2>
        </div>
        <div className='text-2xl [&>p]:font-medium [&>h3]:font-semibold [&>h3]:pt-6'>
          <h3>
            Mojo Dojo Multiply
          </h3>
          <div className='flex flex-row space-x-5 underline pb-4'>
            <a href='https://github.com/thatchereames/mojo-dojo-multiply'>GitHub Repo</a>
            <a href='https://main.d1txqz2pehfgs1.amplifyapp.com/'>Hosted Site</a>
          </div>
          <ul>
            <li>Developed in a software team of 5 using Agile Methodologies</li>
            <li>TypeScript with Konva visuals</li>
            <li>JSON/local-storage persistence</li>
            <li>Structured for future database integration</li>
          </ul>
          <h3>
            Personal Portfolio Site
          </h3>
          <div className='flex flex-row space-x-5 underline pb-4'>
            <a href='https://github.com/thatchereames/portfolio-site'>GitHub Repo</a>
            <a href='https://thatchereames.com/'>Hosted Site</a>
          </div>
          <ul>
            <li>Next.js Framework website</li>
            <li>Coded in React</li>
            <li>Utilizes Motion library</li>
            <li>Hosted using AWS Amplify</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}
