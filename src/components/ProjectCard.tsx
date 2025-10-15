import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  linkType?: 'external' | 'internal';
  linkUrl: string;
  linkText: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  linkType,
  linkUrl,
  linkText,
  subtitle,
  icon
}) => {
  return (
    <div className="project-card p-4 h-[260px] flex flex-col">
      {icon && (
        <div className="mb-2 flex items-center">
          {icon}
        </div>
      )}
      <h3 className="text-base md:text-lg font-bold mb-1 pixel-text pixel-text1">{title}</h3>
      {subtitle && (
        <p className="text-xs md:text-sm text-gray-600 mb-2 pixel-text">{subtitle}</p>
      )}
      <p className="text-sm pixel-text leading-relaxed flex-1 overflow-hidden">
        {description}
      </p>
      {linkType === 'external' ? (
        <a 
          href={linkUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="pixel-button inline-block mt-4"
        >
          {linkText}
        </a>
      ) : (
        <Link href={linkUrl} className="pixel-button inline-block mt-4">
          {linkText}
        </Link>
      )}
    </div>
  );
};

export default ProjectCard;