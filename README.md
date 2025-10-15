# JoneySli 个人博客网站

> 一个基于 Next.js 15 构建的现代化个人博客网站，支持中英双语，集成 Google Analytics 数据统计。

## 🌟 项目特色

- **现代化技术栈**: Next.js 15 + React 19 + TypeScript + Tailwind CSS
- **双语支持**: 完整的中英文国际化支持
- **响应式设计**: 适配各种设备屏幕尺寸
- **数据统计**: 集成 Google Analytics 4 进行访问统计
- **性能优化**: 使用 Turbopack 构建工具，提升开发和构建速度
- **现代 UI**: 结合 NES.css 复古风格和现代设计理念

## 🚀 快速开始

### 环境要求

- Node.js 18.0 或更高版本
- npm、yarn、pnpm 或 bun 包管理器

### 安装依赖

```bash
cd blog-xsf
npm install
```

### 配置环境变量

1. 复制环境变量模板：
```bash
cp .env.local.example .env.local
```

2. 在 `.env.local` 文件中配置 Google Analytics：
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

## 📁 项目结构

```
blog-xsf/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (root)/            # 英文版页面
│   │   ├── zh/                # 中文版页面
│   │   └── layout.tsx         # 根布局
│   ├── components/            # 可复用组件
│   │   ├── GoogleAnalytics.tsx
│   │   ├── SkillPane.tsx
│   │   └── ...
│   └── types/                 # TypeScript 类型定义
├── public/                    # 静态资源
├── .env.local                 # 环境变量（需要手动创建）
└── README-Analytics.md        # Google Analytics 配置文档
```

## 🌐 页面路由

### 英文版
- `/` - 首页
- `/resume` - 个人简历
- `/blog` - 博客文章
- `/cross-platform-blog` - 跨平台开发博客
- `/nestjs-tutorial` - NestJS 教程

### 中文版
- `/zh` - 中文首页
- `/zh/resume` - 中文简历
- `/zh/blog` - 中文博客
- `/zh/cross-platform-blog` - 跨平台开发博客
- `/zh/nestjs-tutorial` - NestJS 教程

## 🛠️ 可用脚本

```bash
# 开发模式（使用 Turbopack）
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start

# 代码检查
npm run lint
```

## 📊 Google Analytics 集成

项目已集成 Google Analytics 4，支持：

- 页面浏览量统计
- 用户行为跟踪
- 自定义事件追踪
- 路由变化监听

详细配置请参考 [README-Analytics.md](./README-Analytics.md)

## 🎨 技术栈

- **框架**: Next.js 15 (App Router)
- **前端**: React 19 + TypeScript
- **样式**: Tailwind CSS 4 + NES.css
- **构建工具**: Turbopack
- **代码规范**: ESLint
- **数据统计**: Google Analytics 4

## 🚀 部署

### Vercel 部署（推荐）

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 中导入项目
3. 配置环境变量 `NEXT_PUBLIC_GA_MEASUREMENT_ID`
4. 部署完成

### 其他平台

```bash
# 构建项目
npm run build

# 启动生产服务器
npm run start
```

## 📝 开发说明

- 使用 TypeScript 进行类型安全开发
- 遵循 Next.js 13+ App Router 规范
- 组件采用函数式组件 + Hooks 模式
- 样式使用 Tailwind CSS 原子化类名
- 支持服务端渲染 (SSR) 和静态生成 (SSG)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

---

**作者**: JoneySli  
**邮箱**: [bmlishizeng@gmail.com]  
**网站**: [https://iamjonesli.com](https://iamjonesli.com)
