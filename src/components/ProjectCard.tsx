import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  githubLink,
  imageUrl,
}) => {
  return (
    <div className="project-card rounded-lg shadow-md p-6 bg-white max-w-sm transition-transform transform hover:scale-105 hover:shadow-lg">
      <div className="relative h-40 w-full mb-4"> {/* Wrapper div for Image */}
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="rounded-lg object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-3 text-base">{description}</p>
      <div className="project-card-tags flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="project-card-tag bg-gray-300 rounded-md px-3 py-1 text-gray-800 text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card-link bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 font-medium transition duration-300 ease-in-out text-sm"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
