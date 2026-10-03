import { playfair } from '@/app/ui/fonts';

export default function Experience() {
  const experiences = [
    {
      title: 'Financial Software & Database Internship',
      description:
        'Summer internship at Related Companies working on their JD Edwards financial software and SQL databases.',
    },
    {
      title: 'Web App Development Team Lead',
      description:
        'Led a 5-person Agile team on a TypeScript educational fighting game across 3 sprints, 300+ commits, and 14+ stand-ups.',
    },
    {
      title: 'VP Coding Instructor',
      description:
        'Educate young learners in varying Computer Science subjects and encouraged future involvement.',
    },
    {
      title: 'Computer Science Teaching Assistant',
      description:
        'Assisted university professor in the education of young academics in the fundamentals of computer science.',
    },
  ];

  return (
    <div className='w-full min-h-[100dvh] flex justify-center px-4 sm:px-6 md:px-8'>
      <div className='w-full max-w-3xl pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-24'>  
        <div className='mb-8 sm:mb-12'>
          <h1 className={`${playfair.className} text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171a21]`}>
            Experience
          </h1>
        </div>
        <div className='space-y-8 sm:space-y-10 md:space-y-12'>
          {experiences.map((exp, idx) => (
            <div key={idx} className='border-b border-[#141111]/15 pb-8 sm:pb-10 last:border-b-0'>
              <h2 className={`${playfair.className} text-2xl md:text-3xl font-semibold text-[#171a21] mb-2 sm:mb-3`}>
                {exp.title}
              </h2>
              <p className='text-xl md:text-2xl font-medium leading-relaxed text-[#141111]/90'>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

