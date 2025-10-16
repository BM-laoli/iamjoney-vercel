// GET /api/v1/categories 的响应
const categoriesResponse = {
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "前端开发",
      "description": "React, Vue, JavaScript, TypeScript 等前端技术分享",
      "create_time": 1697353200,
      "update_time": 1697353200
    },
    {
      "id": 2,
      "name": "后端开发",
      "description": "Node.js, Python, Go, Java 等后端技术探索",
      "create_time": 1697353260,
      "update_time": 1697353260
    },
    {
      "id": 3,
      "name": "数据库技术",
      "description": "MySQL, PostgreSQL, MongoDB, Redis 等数据存储方案",
      "create_time": 1697353320,
      "update_time": 1697353320
    },
    {
      "id": 4,
      "name": "DevOps运维",
      "description": "Docker, Kubernetes, CI/CD, 云服务等运维实践",
      "create_time": 1697353380,
      "update_time": 1697353380
    },
    {
      "id": 5,
      "name": "人工智能",
      "description": "机器学习, 深度学习, ChatGPT 应用开发",
      "create_time": 1697353440,
      "update_time": 1697353440
    },
    {
      "id": 6,
      "name": "工具推荐",
      "description": "开发工具, 效率软件, 实用脚本分享",
      "create_time": 1697353500,
      "update_time": 1697353500
    },
    {
      "id": 7,
      "name": "工具推荐",
      "description": "开发工具, 效率软件, 实用脚本分享",
      "create_time": 1697353500,
      "update_time": 1697353500
    },
    {
      "id": 8,
      "name": "工具推荐",
      "description": "开发工具, 效率软件, 实用脚本分享",
      "create_time": 1697353500,
      "update_time": 1697353500
    },
    {
      "id": 9,
      "name": "工具推荐",
      "description": "开发工具, 效率软件, 实用脚本分享",
      "create_time": 1697353500,
      "update_time": 1697353500
    },
    {
      "id": 10,
      "name": "工具推荐",
      "description": "开发工具, 效率软件, 实用脚本分享",
      "create_time": 1697353500,
      "update_time": 1697353500
    },
    {
      "id": 11,
      "name": "工具推荐",
      "description": "开发工具, 效率软件, 实用脚本分享",
      "create_time": 1697353500,
      "update_time": 1697353500
    }
  ]
}

// GET /api/v1/posts?category_id=1&page=1&limit=50 的响应
const postsResponse = {
  "success": true,
  "data": {
    "posts": [
      {
        "id": 101,
        "title": "React 18 新特性详解：并发渲染与 Suspense",
        "description": "深入了解 React 18 的新特性，包括并发渲染、自动批处理、Suspense 改进等，提升你的 React 开发技能",
        "posts_url": "https://blog.vuejs.org/posts/vue-3-4",
        "seo_keyword": "React 18, 并发渲染, Suspense, 前端开发",
        "category_id": 1,
        "seo_description": "React 18 新特性完整指南，从并发渲染到 Suspense 的实际应用",
        "create_time": 1697440800,
        "update_time": 1697527200,
        "category_name": "前端开发"
      },
      {
        "id": 102,
        "title": "TypeScript 5.0 类型体操：高级类型技巧",
        "description": "探索 TypeScript 5.0 的高级类型特性，掌握条件类型、映射类型、模板字面量类型等进阶技巧",
        "posts_url": "https://blog.vuejs.org/posts/vue-3-4",
        "seo_keyword": "TypeScript 5.0, 高级类型, 类型体操",
        "category_id": 1,
        "seo_description": "TypeScript 5.0 高级类型技巧完全指南",
        "create_time": 1697354400,
        "update_time": null,
        "category_name": "前端开发"
      },
      {
        "id": 103,
        "title": "Next.js 14 App Router 最佳实践",
        "description": "从 Pages Router 迁移到 App Router，了解服务端组件、流式渲染、路由组等新特性的最佳实践",
        "posts_url": "https://nextjs.org/docs/app",
        "seo_keyword": "Next.js 14, App Router, 服务端组件",
        "category_id": 1,
        "seo_description": "Next.js 14 App Router 从入门到精通",
        "create_time": 1697268000,
        "update_time": 1697354400,
        "category_name": "前端开发"
      },
      {
        "id": 104,
        "title": "Vue 3.4 性能优化技巧与实战",
        "description": "学习 Vue 3.4 的性能优化策略，包括响应式优化、编译优化、运行时优化等实用技巧",
        "posts_url": "https://blog.vuejs.org/posts/vue-3-4",
        "seo_keyword": "Vue 3.4, 性能优化, 响应式系统",
        "category_id": 1,
        "seo_description": "Vue 3.4 性能优化完整攻略",
        "create_time": 1697181600,
        "update_time": 1697268000,
        "category_name": "前端开发"
      },
      {
        "id": 105,
        "title": "Vue 3.4 性能优化技巧与实战",
        "description": "学习 Vue 3.4 的性能优化策略，包括响应式优化、编译优化、运行时优化等实用技巧",
        "posts_url": "https://blog.vuejs.org/posts/vue-3-4",
        "seo_keyword": "Vue 3.4, 性能优化, 响应式系统",
        "category_id": 1,
        "seo_description": "Vue 3.4 性能优化完整攻略",
        "create_time": 1697181600,
        "update_time": 1697268000,
        "category_name": "前端开发"
      },
      {
        "id": 106,
        "title": "Vue 3.4 性能优化技巧与实战",
        "description": "学习 Vue 3.4 的性能优化策略，包括响应式优化、编译优化、运行时优化等实用技巧",
        "posts_url": "https://blog.vuejs.org/posts/vue-3-4",
        "seo_keyword": "Vue 3.4, 性能优化, 响应式系统",
        "category_id": 1,
        "seo_description": "Vue 3.4 性能优化完整攻略",
        "create_time": 1697181600,
        "update_time": 1697268000,
        "category_name": "前端开发"
      },
      {
        "id": 107,
        "title": "Vue 3.4 性能优化技巧与实战",
        "description": "学习 Vue 3.4 的性能优化策略，包括响应式优化、编译优化、运行时优化等实用技巧",
        "posts_url": "https://blog.vuejs.org/posts/vue-3-4",
        "seo_keyword": "Vue 3.4, 性能优化, 响应式系统",
        "category_id": 1,
        "seo_description": "Vue 3.4 性能优化完整攻略",
        "create_time": 1697181600,
        "update_time": 1697268000,
        "category_name": "前端开发"
      },
      {
        "id": 108,
        "title": "Vue 3.4 性能优化技巧与实战",
        "description": "学习 Vue 3.4 的性能优化策略，包括响应式优化、编译优化、运行时优化等实用技巧",
        "posts_url": "https://blog.vuejs.org/posts/vue-3-4",
        "seo_keyword": "Vue 3.4, 性能优化, 响应式系统",
        "category_id": 1,
        "seo_description": "Vue 3.4 性能优化完整攻略",
        "create_time": 1697181600,
        "update_time": 1697268000,
        "category_name": "前端开发"
      },
    ],
    "pagination": {
      "page": 1,
      "limit": 50,
      "total": 4,
      "pages": 1
    }
  }
}

export { categoriesResponse, postsResponse };