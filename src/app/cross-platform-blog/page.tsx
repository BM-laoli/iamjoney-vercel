import React from 'react';
import ProjectDetailPage from '@/components/ProjectDetailPage';
import { ProjectDetail } from '@/types/project';

const crossPlatformProject: ProjectDetail = {
  title: 'Cross-Platform Technology Blog',
  description: 'Sharing cross-platform development experience and techniques, including practical cases and best practices for React Native, Flutter, Electron, and other technologies. In-depth exploration of the advantages, challenges, and solutions of modern cross-platform development frameworks, helping developers choose the right tech stack and improve development efficiency.',
  articleLink: 'https://juejin.cn/column/7343606012581904410',
  difficulty: 'intermediate',
  estimatedTime: 'Continuously Updated',
  tags: ['React Native', 'Flutter', 'Electron', 'Cross-Platform Development', 'Mobile Development', 'Desktop Applications'],
  learningOutcomes: [
    'Master React Native mobile application development skills',
    'Learn to use Flutter cross-platform UI framework',
    'Understand Electron desktop application development process',
    'Master cross-platform state management and data flow design',
    'Learn native module integration and platform-specific feature implementation',
    'Understand performance optimization strategies for cross-platform applications',
    'Master multi-platform publishing and deployment processes',
    'Learn debugging and testing techniques for cross-platform development',
    '...'
  ],
  targetAudience: [
    'Programmers with frontend development foundation',
    'Web developers wanting to enter mobile development field',
    'Mobile app developers hoping to improve development efficiency',
    'Tech enthusiasts interested in cross-platform technologies',
    'Teams needing to develop multi-platform applications simultaneously',
    'Architects wanting to understand modern cross-platform solutions',
    '...'
  ],
  expectedOutputs: [
    'Complete React Native application projects',
    'Flutter cross-platform application practical cases',
    'Electron desktop application development templates',
    'Cross-platform component libraries and toolsets',
    'Performance optimization and best practice guides',
    'Multi-platform CI/CD deployment configurations',
    'Cross-platform development toolchain recommendations',
    'Technology selection and architecture design documents',
    '...'
  ]
};

export default function CrossPlatformBlogPage() {
  return <ProjectDetailPage project={crossPlatformProject} />;
}