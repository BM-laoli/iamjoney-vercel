import React from 'react';
import ProjectDetailPage from '@/components/ProjectDetailPage';
import { ProjectDetail } from '@/types/project';

const nestjsProject: ProjectDetail = {
  title: 'NestJS 企业级后端开发教程',
  description: '从零开始学习NestJS框架，构建企业级后端应用。涵盖依赖注入、模块化架构、数据库集成、身份验证、API设计等核心概念，通过实际项目案例掌握现代Node.js后端开发的最佳实践。',
  articleLink: 'https://juejin.cn/column/7343606012581904410',
  difficulty: 'intermediate',
  estimatedTime: '4-6周',
  tags: ['NestJS', 'Node.js', 'TypeScript', '后端开发', 'API设计', '企业级应用'],
  learningOutcomes: [
    '掌握NestJS框架的核心概念和架构设计',
    '学会使用TypeScript进行类型安全的后端开发',
    '了解依赖注入和控制反转的设计模式',
    '掌握RESTful API和GraphQL接口设计',
    '学会数据库集成和ORM框架使用',
    '掌握身份验证和授权机制实现',
    '了解微服务架构和模块化开发',
    '学会单元测试和集成测试编写',
    '掌握部署和运维的基本技能',
    '...'
  ],
  targetAudience: [
    '有JavaScript基础的前端开发者',
    '想要学习后端开发的程序员',
    '希望提升Node.js技能的开发者',
    '对企业级应用开发感兴趣的技术人员',
    '需要构建可扩展后端服务的团队',
    '想要学习现代后端架构的架构师',
    '...'
  ],
  expectedOutputs: [
    '完整的NestJS企业级后端项目',
    'RESTful API接口设计和实现',
    '用户认证和权限管理系统',
    '数据库设计和数据访问层',
    '完整的单元测试和集成测试',
    'Docker容器化部署配置',
    'API文档和开发规范',
    '性能监控和日志系统',
    '...'
  ]
};

export default function NestJSTutorialPage() {
  return <ProjectDetailPage project={nestjsProject} />;
}