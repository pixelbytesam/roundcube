import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-white border-2 border-brand-dark rounded-2xl overflow-hidden shadow-brutal transition-all duration-200 hover:-translate-y-1 hover:shadow-brutal-hover">
      <div className="relative overflow-hidden h-52">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/60 transition-all duration-300 flex items-center justify-center">
          <span className="text-white font-semibold text-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            View Details →
          </span>
        </div>
        <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold bg-brand-secondary text-brand-dark border-2 border-brand-dark rounded-full">
          {project.year}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-brand-dark">{project.title}</h3>
          <span className="text-xs font-medium uppercase px-2 py-0.5 bg-brand-cream border border-brand-dark rounded-md text-brand-gray-500">
            {project.category}
          </span>
        </div>
        <p className="text-brand-gray-500 text-sm leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-xs font-medium bg-brand-cream text-brand-dark border border-brand-dark/20 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
