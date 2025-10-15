import React from 'react';
import ProjectDetailPage from '@/components/ProjectDetailPage';
import { ProjectDetail } from '@/types/project';

const nestjsProject: ProjectDetail = {
  title: 'NestJS Tutorial Column',
  description: 'This is a detailed tutorial about the NestJS framework, covering various topics from basic to advanced, helping developers quickly master this powerful Node.js framework. NestJS is a framework for building efficient, scalable Node.js server-side applications, using modern JavaScript and fully supporting TypeScript.',
  articleLink: 'https://juejin.cn/column/7179578893353877565',
  difficulty: 'intermediate',
  estimatedTime: '4-6 weeks',
  tags: ['NestJS', 'Node.js', 'TypeScript', 'Backend Development', 'API Development'],
  learningOutcomes: [
    'Master core concepts and architectural design of NestJS framework',
    'Learn to use decorators and dependency injection for modular development',
    'Proficiently use controllers, services, and middleware to build RESTful APIs',
    'Master database integration and ORM usage (TypeORM/Prisma)',
    'Learn to implement authentication and authorization mechanisms',
    'Understand microservice architecture and GraphQL integration',
    'Master test-driven development and unit test writing',
    'Learn performance optimization and deployment best practices',
    '...'
  ],
  targetAudience: [
    'Developers with JavaScript/TypeScript foundation',
    'Programmers wanting to learn modern Node.js backend development',
    'Developers hoping to migrate from Express.js to NestJS',
    'Engineers interested in enterprise-level application development',
    'Developers wanting to master dependency injection and decorator patterns',
    'Teams preparing to build scalable microservice architecture',
    '...'
  ],
  expectedOutputs: [
    'Complete NestJS project practical cases',
    'Reusable module and service component libraries',
    'Standardized API interface design specifications',
    'Comprehensive user authentication and permission management system',
    'High-quality unit tests and integration tests',
    'Production environment deployment configuration and CI/CD processes',
    'Performance monitoring and log management solutions',
    'Technical documentation and best practice summaries',
    '...'
  ]
};

export default function NestJSTutorialPage() {
  return <ProjectDetailPage project={nestjsProject} />;
}