import { playfair } from '@/app/ui/fonts';

export default function About() {
  return (
    <div className='w-full min-h-[100dvh] flex justify-center px-4 sm:px-6 md:px-8'>
      <div className='w-full max-w-3xl pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-24'>  
        <div className='mb-6 sm:mb-8'>
          <h1 className={`${playfair.className} text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171a21]`}>
            About Me
          </h1>
        </div>
        <div className='text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-[#141111]/90 space-y-4 sm:space-y-6'>
          <p>
            I&apos;m a current Master&apos;s Student at the University of Southern California. Studying <span className='marker-highlight'>Computer Science</span> with an emphasis in Data Systems & Analysis.
          </p>
          <p>
            I earned a Bachelor of Science degree in Mathematics and Computer Science from the University of California San Diego.
          </p>
          <p>
            My skills include Object-Oriented Programming, Agile Methodologies, <span className='marker-highlight'>SQL Data Bases</span>, Next.js, Typescript, C/C++, Java, Python, and HTML. I&apos;m an <span className='marker-highlight'>eager learner</span> always wanting to push the bounds of my knowledge. 
          </p>
          <p>
            Currently I&apos;m interested in furthering my knowledge of data storage and process, <span className='marker-highlight'>interpretable machine learning</span> and the education of computer science. I am obtaining this knowledge through my university courses, fall internship at Quikturn, and some independent reading.
          </p>
          <p>
            Beyond the classroom and the terminal, I love getting outside. Being an <span className='marker-highlight'>Eagle Scout</span> has pushed me to explore nature. I&apos;m always going for runs, hiking, taking backpacking trips, and spending time at the park.
          </p>          
        </div>
      </div>
    </div>
  );
}
