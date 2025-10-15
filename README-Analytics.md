# Google Analytics 集成说明

## 概述
本项目已集成 Google Analytics 4 (GA4) 用于网站访问统计和用户行为分析。

## 配置步骤

### 1. 获取 Google Analytics 测量 ID
1. 访问 [Google Analytics](https://analytics.google.com/)
2. 创建新的 GA4 属性或使用现有属性
3. 获取测量 ID（格式：G-XXXXXXXXXX）

### 2. 配置环境变量
在项目根目录的 `.env.local` 文件中设置：
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 3. 功能特性
- ✅ 自动页面浏览跟踪
- ✅ 路由变化跟踪
- ✅ 自定义事件跟踪
- ✅ 服务端渲染兼容
- ✅ TypeScript 支持

## 使用方法

### 跟踪自定义事件
```typescript
import { trackEvent } from '@/components/GoogleAnalytics'

// 跟踪按钮点击
trackEvent('click', 'button', 'header-cta')

// 跟踪文件下载
trackEvent('download', 'file', 'resume.pdf')
```

### 跟踪页面浏览
```typescript
import { trackPageView } from '@/components/GoogleAnalytics'

// 手动跟踪页面浏览
trackPageView('/custom-page', 'Custom Page Title')
```

## 文件结构
```
src/
├── components/
│   └── GoogleAnalytics.tsx    # GA4 组件
├── app/
│   └── layout.tsx             # 根布局（已集成 GA）
└── .env.local                 # 环境变量配置
```

## 注意事项
- 环境变量 `.env.local` 已在 `.gitignore` 中被忽略，不会提交到版本控制
- 在生产环境部署时，需要在部署平台设置相应的环境变量
- GA4 数据通常有 24-48 小时的延迟

## 验证集成
1. 启动开发服务器：`npm run dev`
2. 打开浏览器开发者工具
3. 在 Network 标签页中查找对 `googletagmanager.com` 的请求
4. 在 GA4 实时报告中验证数据

## 隐私合规
- 本集成遵循 GDPR 和其他隐私法规要求
- 建议添加 Cookie 同意横幅（可选）
- 可根据需要配置数据保留政策