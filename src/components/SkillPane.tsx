import React from 'react';
import SkillBar from './SkillBar';

interface Skill {
  name: string;
  rating: number;
}

interface SkillPaneProps {
  title: string;
  skills: string[] | Skill[];
  rating?: number;
  className?: string;
}

const SkillPane: React.FC<SkillPaneProps> = ({ 
  title, 
  skills, 
  rating = 4, 
  className = "" 
}) => {
  return (
    <div className={`mb-8 ${className}`}>
      <h3 className="text-xl font-bold mb-4 pixel-text">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => {
          // 检查skill是字符串还是对象
          const skillName = typeof skill === 'string' ? skill : skill.name;
          const skillRating = typeof skill === 'string' ? rating : skill.rating;
          
          return (
            <SkillBar
              key={index}
              skillName={skillName}
              rating={skillRating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SkillPane;