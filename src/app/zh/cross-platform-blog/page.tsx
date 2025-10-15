import React from 'react';
import ProjectDetailPage from '@/components/ProjectDetailPage';
import { ProjectDetail } from '@/types/project';

const crossPlatformProject: ProjectDetail = {
  title: 'Cross-Platform 跨平台技术博客',
  description: '分享跨平台开发的经验和技巧，包括React Native、Flutter、Electron等技术的实践案例和最佳实践。深入探讨现代跨平台开发框架的优势、挑战和解决方案，帮助开发者选择合适的技术栈并提高开发效率。',
  articleLink: 'https://juejin.cn/column/7343606012581904410',
  difficulty: 'intermediate',
  estimatedTime: '持续更新',
  tags: ['React Native', 'Flutter', 'Electron', '跨平台开发', '移动开发', '桌面应用'],
  learningOutcomes: [
    '掌握React Native移动应用开发技能',
    '学会Flutter跨平台UI框架的使用',
    '了解Electron桌面应用开发流程',
    '掌握跨平台状态管理和数据流设计',
    '学会原生模块集成和平台特定功能实现',
    '了解跨平台应用的性能优化策略',
    '掌握多平台发布和部署流程',
    '学会跨平台开发的调试和测试技巧',
    '...'
  ],
  targetAudience: [
    '有前端开发基础的程序员',
    '想要进入移动开发领域的Web开发者',
    '希望提高开发效率的移动应用开发者',
    '对跨平台技术感兴趣的技术爱好者',
    '需要同时开发多平台应用的团队',
    '想要了解现代跨平台解决方案的架构师',
    '...'
  ],
  expectedOutputs: [
    '完整的React Native应用项目',
    'Flutter跨平台应用实战案例',
    'Electron桌面应用开发模板',
    '跨平台组件库和工具集',
    '性能优化和最佳实践指南',
    '多平台CI/CD部署配置',
    '跨平台开发工具链推荐',
    '技术选型和架构设计文档',
    '...'
  ]
};

export default function CrossPlatformBlogPage() {
  return <ProjectDetailPage project={crossPlatformProject} />;
}