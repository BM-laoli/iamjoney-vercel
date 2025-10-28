'use client';

import Link from 'next/link';
import Card from '@/components/Card';
import Footer from '@/components/Footer';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* 返回按钮 */}
        <div className="mb-6">
          <Link href="/zh" className="inline-block">
            <button className="pixel-text bg-white border-2 border-black px-4 py-2 hover:bg-gray-100 transition-colors">
              ← 返回首页
            </button>
          </Link>
        </div>

        {/* 个人概况 */}
        <Card title="个人简历" className="mb-10">
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold pixel-text mb-2">李仕增 (JoneySli)</h2>
              <p className="pixel-text text-lg mb-2">全栈开发工程师 · 5年经验</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm pixel-text">
                <div>
                  <p><strong>邮箱:</strong> bmlishizeng@gmail.com</p>
                  <p><strong>微信:</strong> +86 18376621755</p>
                </div>
                <div>
                  <p><strong>个人网站:</strong> <a href="https://iamjoney.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">iamjoney.com</a></p>
                  <p><strong>GitHub:</strong> <a href="https://github.com/BM-laoli" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">github.com/JoneySli</a></p>
                </div>
              </div>
            </div>
          </div>
          <p className="pixel-text text-sm md:text-base mt-2">期望职位：全栈(.net)前端React/游戏客户端 · 行业不限 · 薪资：面议</p>
        </Card>

        {/* 技术栈 */}
        <Card title="技术栈" className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card noStyle={true}>
              <h3 className="font-bold pixel-text mb-3">前端技术</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm pixel-text">
                <li>React / React Native / Next.js</li>
                <li>TypeScript / JavaScript (ES6+)</li>
                <li>HTML5 / CSS3 / Tailwind CSS</li>
                <li>Vue.js / Angular </li>
                <li>iOS/Android</li>
              </ul>
            </Card>
            
            <Card noStyle={true}>
              <h3 className="font-bold pixel-text mb-3">后端技术</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm pixel-text">
                <li>Node.js / NestJS / Express</li>
                <li>.NET Core / C#</li>
                <li>Python / Django</li>
                <li>MySQL / PostgreSQL / Redis</li>
                <li>Docker / Kubernetes</li>
              </ul>
            </Card>
            
            <Card noStyle={true}>
              <h3 className="font-bold pixel-text mb-3">游戏开发</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm pixel-text">
                <li>Unreal Engine (UE4/UE5)</li>
                <li>Unity</li>
                <li>C++ / Blueprint</li>
                <li>游戏客户端开发</li>
                <li>性能优化</li>
              </ul>
            </Card>
            
            <Card noStyle={true}>
              <h3 className="font-bold pixel-text mb-3">其他技能</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm pixel-text">
                <li>Git / SVN 版本控制</li>
                <li>CI/CD 持续集成</li>
                <li>敏捷开发 / Scrum</li>
                <li>技术文档编写</li>
                <li>团队协作与沟通</li>
              </ul>
            </Card>
          </div>
          <p className="pixel-text text-sm mt-4 text-gray-600">
            熟练掌握现代前端框架和后端技术，具备全栈开发能力。近期专注于游戏客户端开发，
            在移动应用、Web应用和游戏开发方面都有丰富的实战经验。
          </p>
        </Card>

        {/* 工作经历 */}
        <Card title="工作经历" className="mb-10">
          {/* 网易广州 */}
          <Card noStyle={true} className="mb-6">
            <h3 className="font-bold pixel-text">2024年9月 - 至今 · 网易广州（法本信息外包） · 游戏客户端开发 · eFootball工作室</h3>
            <p className="pixel-text mt-1">技术关键词：React Native / React / UE / Python / .NET Core / Node</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm pixel-text">
              <li>目前主攻：前端ReactNative + 游戏客户端(UE方向) + .NET 全栈</li>
              <li>成功转型（前端 → 游戏客户端 + 全栈</li>
              <li>成功上线eFootball中国PC版</li>
              <li>从0搭建游戏盒子子模块架构（包含数据同步、CSV同步、热更新方案）</li>
              <li>成功上线eFootball游戏盒子三端（Taro）</li>
            </ul>
            <p className="pixel-text mt-2">工作职责：维护React Native App（Taro）和游戏盒子项目，同时编写UE客户端代码（Python / C++ / Blueprint）。</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm pixel-text">
              <li>主导游戏盒子App开发，确保稳定性和用户体验（主程）</li>
              <li>负责eFootball Online中国客户端开发和性能优化</li>
            </ul>
          </Card>

          {/* 新蛋 */}
          <Card noStyle={true} className="mb-6">
            <h3 className="font-bold pixel-text">2021年8月 - 2023年11月 · 新蛋科技（成都） · 全栈工程师（偏前端） · MIS-EC</h3>
            <p className="pixel-text mt-1">技术关键词：Docker / MySQL / React / .NET</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm pixel-text">
              <li>从0开发新蛋卖家App，上架App Store / Google Play / 应用宝，国内日活100+</li>
              <li>Shopify插件上架Shopify App Store</li>
              <li>协助大型电商后台从Angular迁移到React</li>
              <li>从0设计实现App开发流水线和基础设施</li>
            </ul>
            <p className="pixel-text mt-2">工作职责：ToC（newegg.com）和ToB（卖家App、卖家后台管理）开发，在线客服工具和WordPress站点等支撑项目。</p>
          </Card>

          {/* 湖南天云 */}
          <Card noStyle={true} className="mb-2">
            <h3 className="font-bold pixel-text">2020年8月 - 2021年1月 · 湖南天云软件科技有限公司 · 前端开发工程师</h3>
            <p className="pixel-text mt-1">技术关键词：TypeScript / React / JavaScript / CSS3 / HTML5</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm pixel-text">
              <li>产品线前端负责人，组织技术讨论和技术选型；主导两个大型应用的前端架构设计</li>
              <li>熟练掌握React / Vue / Angular · 掌握Golang和Node；主导项目前端模块化架构</li>
            </ul>
          </Card>
        </Card>

        {/* 项目经验 */}
        <Card title="项目经验" className="mb-10">
          <div className="space-y-6">
            {/* eFootball游戏盒子 */}
            <Card noStyle={true}>
              <h3 className="font-bold pixel-text">2024.09 - 至今 · eFootball游戏盒子（Taro多端）</h3>
              <p className="pixel-text">技术栈：Taro · React · TypeScript · Python · UE</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm pixel-text">
                <li>从0搭建游戏盒子子模块架构，包含数据同步、CSV同步、热更新方案</li>
                <li>成功上线三端（iOS / Android / 小程序）</li>
                <li>负责整体架构设计和核心模块开发</li>
                <li>实现高效的数据同步机制，确保多端实时更新</li>
              </ul>
            </Card>

            {/* eFootball Online中国 */}
            <Card noStyle={true}>
              <h3 className="font-bold pixel-text">2024.09 - 至今 · eFootball Online中国客户端</h3>
              <p className="pixel-text">技术栈：UE · Python · C++ · Blueprint</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm pixel-text">
                <li>负责eFootball Online中国客户端开发和性能优化</li>
                <li>成功上线eFootball中国PC版</li>
                <li>实现游戏客户端核心功能和UI系统</li>
                <li>优化游戏性能，确保流畅的用户体验</li>
              </ul>
            </Card>

            {/* 在线客服 */}
            <Card noStyle={true}>
              <h3 className="font-bold pixel-text">2022.11 - 2023.11 · 新蛋在线客服 · 全栈（.NET Core）</h3>
              <p className="pixel-text">技术栈：React · .NET Core · Node.js（SSR + Nest BFF）</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm pixel-text">
                <li>重构完善业务文档；整理第三方平台、后端和前端协作细节</li>
                <li>优化Config模块：配置项从11个→7个，层级减少2层，解耦分支逻辑</li>
                <li>重写嵌入式脚本SDK，降低其他团队接入成本</li>
                <li>实现智能上下文判断，自动队列分发</li>
                <li>系统性修复历史缺陷，补全缺失文档</li>
              </ul>
              <p className="pixel-text mt-2">
                项目链接：
                <a className="text-blue-600 underline" href="https://kb.newegg.com/contact-us" target="_blank" rel="noopener noreferrer">https://kb.newegg.com/contact-us</a>
                ，
                  <a className="text-blue-600 underline" href="https://www.newegg.com/" target="_blank" rel="noopener noreferrer">新蛋官网</a>
              </p>
            </Card>

            {/* 卖家App */}
            <Card noStyle={true}>
              <h3 className="font-bold pixel-text">2021.08 - 2023.11 · 新蛋卖家App · 项目负责人</h3>
              <p className="pixel-text">技术栈：React Native · iOS/Android · Node.js</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm pixel-text">
                <li>RN工程架构设计 / 打包分包平台设计</li>
                <li>桥接MobPush Android / iOS SDK实现推送</li>
                <li>设计开发Message和Order核心模块</li>
                <li>设计RN WebView H5 SDK；集成集团H5统一登录（Nest + Redis + WebView）</li>
              </ul>
              <p className="pixel-text mt-2">
                项目链接：
                <a className="text-blue-600 underline" href="https://apps.apple.com/cn/app/newegg-seller/id1602794897" target="_blank" rel="noopener noreferrer">App Store</a>
              </p>
            </Card>

            {/* 美团点得快 */}
            <Card noStyle={true}>
              <h3 className="font-bold pixel-text">2021.01 - 2021.08 · 美团点得快 · 高级前端工程师</h3>
              <p className="pixel-text">技术栈：iOS/Android + React H5 · 混合开发</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm pixel-text">
                <li>搭建商家注册模块，迁移完善打印能力</li>
                <li>实现二维码位置管理和二维码生成/保存</li>
                <li>负责商家业务设置模块；为内部组件库贡献PR</li>
              </ul>
            </Card>
          </div>
        </Card>

        {/* 教育经历 */}
        <Card title="教育经历" className="mb-10">
          <Card noStyle={true}>
            <h3 className="font-bold pixel-text">September 2020 - June 2023 · Nankai University · CS · Undergraduate</h3>
            <h3 className="font-bold pixel-text">September 2017 - June 2020 · Tianjin Vocational University · Software Technology · Associate's Degree</h3>
          </Card>
        </Card>

        {/* 证书/资格 */}
        {/* <Card title="证书/资格" className="mb-10">
          <Card noStyle={true}>
            <ul className="list-disc pl-5 space-y-1 text-sm pixel-text">
              <li>软件设计师（中级） - 2019</li>
              <li>英语六级 - 2018</li>
              <li>计算机二级（C语言） - 2017</li>
            </ul>
          </Card>
        </Card> */}

        {/* 页脚 */}
        <Card noStyle={true} className="text-center">
          {/* 感谢查看 */}
          <p className="pixel-text text-sm text-gray-600">感谢您的查看！期待与您的合作机会。</p>
        </Card>

        <Footer />
      </div>
    </div>
  );
}