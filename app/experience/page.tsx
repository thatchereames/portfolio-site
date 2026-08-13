import { playfair, signature } from '@/app/ui/fonts';

export default function Contact() {
  return (
    <div className='w-screen flex flex-row justify-center overflow-scroll'>
      <div className='pt-[15%] w-[50%] mr-[10%] pb-[15%]'>  
        <div className='w-fit text-[clamp(30px,10vw,6000px)]'>
          <div className='w-fit text-[clamp(30px,15vw,6000px)]'>
          <h2 className={`${playfair.className}text-left text-[0.25em]`}>Experience</h2>
        </div>
        <div className='text-2xl [&>p]:font-medium [&>h3]:font-semibold [&>h3]:pt-6 [&>h3]:pb-4'>
          <h3 className='pt-4'>
            Financial Software & Database Internship
          </h3>
          <p>
            Summer internship at Related Companies working on their JD Edwards financial software and SQL databases.
          </p>
          <h3>
            Web App Development Team Lead
          </h3>
          <p>
            Led a 5-person Agile team a TypeScript educational fighting game across 3 sprints, 300+ commits, and 14+ stand-ups.
          </p>
          <h3>
            VP Coding Instructor
          </h3>
          <p>
            Educate young learners in varying Computer Science subjects and encouraged future involvement
          </p>
          <h3>
            Computer Science Teaching Assistant
          </h3>
          <p>
            Assisted university professor in the education of young academics in the fundamentals of computer science
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
