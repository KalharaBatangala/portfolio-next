import Image from 'next/image';
import { Experience } from '@/data/experiences';

type ExperienceCardProps = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg p-6 max-w-4xl mx-auto mb-6 relative group overflow-hidden border border-[#FF7300]">
      {experience.isFeatured && (
        <div className="absolute top-3 left-3 bg-orange-600 text-white text-xs font-semibold px-2 py-1 rounded shadow-lg z-10">
          Featured
        </div>
      )}


      {/* Experience Head Section */}
      <div className="flex items-center space-x-4 mb-4">
        {experience.logo && (
          <Image
            src={experience.logo}
            alt={`${experience.company} logo`}
            width={64}
            height={64}
            sizes="64px"
            placeholder="blur"
            className="w-16 h-16 object-contain rounded"
          />
        )}
        <div>
          <h3 className="text-2xl font-bold text-white">{experience.role}</h3>
          <p className="text-gray-400">
            {experience.company} | <span className="italic">{experience.duration}</span>
          </p>
        </div>
      </div>

        {/*  Work Experience Section */}
      <ul className="list-disc list-inside text-gray-300 mb-4 marker:text-secondary">
        {experience.description.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>

        {/* Tech Stack Section */}
      {experience.techStack && (
        <div className="flex flex-wrap gap-2">
          {experience.techStack.map((tech, idx) => (
            <span key={idx} className="bg-orange-600 text-white text-xs px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      )}

      {/*  Additional Links */}
      {experience.documents && experience.documents.length > 0 && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-white mb-2">Supporting Documents</h4>
          <ul className="list-disc list-inside text-secondary">
            {experience.documents.map((doc, idx) => (
              <li key={idx}>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-gray-300 underline"
                >
                  {doc.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}



    </div>
  );
}