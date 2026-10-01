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
            Current Master's Student at the University of Southern California. Studying <span className='marker-highlight'>Computer Science</span> with an emphasis in Data Systems & Analysis.
          </p>
          <p>
            Earned a Bachelor of Science degree in Mathematics and Computer Science from the University of California San Diego.
          </p>
          <p>
            Skilled in object-oriented programming, SQL Data Bases, C/C++, Java, Python, and HTML. An eager learner interested in the fields of data storage and process, <span className='marker-highlight'>interpretable machine learning</span> and the education of computer science. Especially skilled from experience in areas of team management, group collaboration, and customer service.
          </p>
        </div>
      </div>
    </div>
  );
}
