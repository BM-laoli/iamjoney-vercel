import React from 'react';
import ProjectDetailPage from '@/components/ProjectDetailPage';
import { ProjectDetail } from '@/types/project';

const crossPlatformProject: ProjectDetail = {
  title: 'Blog & Web Journal - Thoughts & Reflections',
  description: 'Sharing personal thoughts, learning experiences, and project practices, including but not limited to technical articles, project cases, tool recommendations, etc. Life is a wilderness.',
  articleLink: 'https://juejin.cn/column/7530567828967587875',
  difficulty: 'intermediate',
  estimatedTime: 'Continuously Updated',
  tags: ['Blog', 'Web Journal', 'Thoughts & Reflections'],
  learningOutcomes: [
    'Gain new perspectives on technical thinking and problem-solving',
    'Understand cutting-edge technology trends and industry dynamics',
    'Learn practical project experience and lessons learned',
    'Master efficient learning methods and technical paths',
    'Develop technical writing and knowledge sharing skills',
    'Build systematic technical knowledge framework',
    'Improve code quality and engineering mindset',
    'Expand technical vision and career development insights'
  ],
  targetAudience: [
    'Developers who love technical sharing',
    'Programmers seeking real project experience',
    'Tech enthusiasts wanting to expand technical horizons',
    'Developers looking for career development advice',
    'Readers interested in technical thoughts and insights',
    'Peers hoping to learn efficient learning methods'
  ],
  expectedOutputs: [
    'Technical practice experience sharing articles',
    'Project development insights and pitfall summaries',
    'Cutting-edge technology research and learning notes',
    'Development tools and efficiency improvement tips',
    'Career development thoughts and suggestions',
    'Technical community communication and discussions',
    'Open source projects and code sharing',
    'Personal growth trajectory and reflection records'
  ]
};

export default function CrossPlatformBlogPage() {
  return <ProjectDetailPage project={crossPlatformProject} />;
}