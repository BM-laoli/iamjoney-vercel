import React from 'react';
import ProjectDetailPage from '@/components/ProjectDetailPage';
import { ProjectDetail } from '@/types/project';

const crossPlatformProject: ProjectDetail = {
  title: '博客 & 网络日志 - 思想与思考',
  description: '分享个人思考、学习心得和项目实践，包括但不限于技术文章、项目案例、工具推荐等。生活是一片荒野。',
  articleLink: 'https://juejin.cn/column/7530567828967587875',
  difficulty: 'intermediate',
  estimatedTime: '持续更新',
  tags: ['博客', '网络日志', '思想与思考'],
  learningOutcomes: [
    '获得技术思考和问题解决的新视角',
    '了解前沿技术趋势和行业动态',
    '学习实际项目经验和踩坑总结',
    '掌握高效学习方法和技术路径',
    '培养技术写作和知识分享能力',
    '建立系统性的技术知识框架',
    '提升代码质量和工程化思维',
    '拓展技术视野和职业发展思路'
  ],
  targetAudience: [
    '热爱技术分享的开发者',
    '寻求真实项目经验的程序员',
    '希望拓展技术视野的技术爱好者',
    '寻找职业发展建议的开发者',
    '对技术思考和见解感兴趣的读者',
    '希望学习高效学习方法的同行'
  ],
  expectedOutputs: [
    '技术实践经验分享文章',
    '项目开发心得和踩坑总结',
    '前沿技术研究和学习笔记',
    '开发工具和效率提升技巧',
    '职业发展思考和建议',
    '技术社区交流和讨论',
    '开源项目和代码分享',
    '个人成长轨迹和反思记录'
  ]
};

export default function CrossPlatformBlogPage() {
  return <ProjectDetailPage project={crossPlatformProject} />;
}