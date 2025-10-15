import React from 'react';

interface SkillBarProps {
  skillName: string;
  rating?: number; // 1-5 星级评分
  progress?: number; // 可选的自定义进度值，如果不提供则基于rating计算
}

const SkillBar: React.FC<SkillBarProps> = ({ 
  skillName, 
  rating = 4, // 默认4星
  progress // 不再设置默认值，将基于rating计算
}) => {
  // 将评分转换为星星显示
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? '★' : '☆');
    }
    return stars.join('');
  };

  // 基于评分计算进度条百分比（满分5星对应100%）
  const calculatedProgress = progress !== undefined ? progress : (rating / 5) * 100;

  return (
    <div className="mb-2">
      <div className="flex justify-between mb-1">
        <span className="pixel-text text-xs">{skillName}</span>
        <span className="pixel-text text-xs">{renderStars()}</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: `${calculatedProgress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;