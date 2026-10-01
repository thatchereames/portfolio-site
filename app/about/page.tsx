import { playfair, signature } from '@/app/ui/fonts';

export default function About() {
  return (
    <div className='w-screen flex flex-row justify-center overflow-scroll'>
      <div className='pt-[15%] md:w-[60%] w-[70%] md:mr-[10%] pb-[15%]'>  
        <div className='w-fit text-[clamp(30px,15vw,6000px)]'>
          <h2 className={`${playfair.className}text-left text-[0.25em]`}>About Me</h2>
        </div>
        <div className='py-4 text-2xl font-medium [&>p]:py-4'>
          <p>
            I'm a current Master's Student at the University of Southern California. Studying <span className='marker-highlight'>Computer Science</span> with an emphasis in Data Systems & Analysis.
          </p>
          <p>
            I earned a Bachelor of Science degree in Mathematics and Computer Science from the University of California San Diego.
          </p>
          <p>
            My skills include Object-Oriented Programming, Agile Methodologies, <span className='marker-highlight'>SQL Data Bases</span>, Next.js, Typescript, C/C++, Java, Python, and HTML. I'm an <span className='marker-highlight'>eager learner</span> always wanting to push the bounds of my knowledge. 
          </p>
          <p>
            Currently I'm interested in furthering my knowledge of data storage and process, <span className='marker-highlight'>interpretable machine learning</span> and the education of computer science. I obtaining this knowledge through my university courses, fall internship at Quikturn, and some independent reading.
          </p>
          <p>
            Beyond the classroom and the terminal, I love getting outside. Being an <span className='marker-highlight'>Eagle Scout</span> has pushed me to explore nature. I'm always going for runs, hiking, taking backpacking trips, and spending time at the park.
          </p>          
        </div>
      </div>
    </div>
  );
}
