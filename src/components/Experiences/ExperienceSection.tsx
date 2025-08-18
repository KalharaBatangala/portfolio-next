import ExperienceCard from './ExperienceCard';
import { experiences } from '@/data/experiences';

export default function ExperienceSection() {
  return (
    <section className="container mx-auto px-4 pt-24 pb-16">
      <h2 className="text-4xl font-bold text-black dark:text-white mb-12 text-center animate-fade-in">
        Industry Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
}