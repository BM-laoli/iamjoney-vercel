import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import Card from "@/components/Card";
import SkillPane from "@/components/SkillPane";
import '../pages.css'
import Footer from "@/components/Footer";

const ProjectCardData = [
  {
    title: 'NestJS/Nodejs专栏',
    // subtitle: 'Nest指南全网免费的最全面Nest指南',
    description: '全面指南，深入浅出，结构清晰，与Nest更新同步',
    // linkType: 'external' as const,
    linkUrl: '/zh/nestjs-tutorial',
    icon: '/window.svg'
  },
   {
    title: '跨平台开发专栏',
    description: '跨平台技术，React Native、Flutter、Android、iOS、鸿蒙，技术探索',
    linkUrl: '/zh/cross-platform-blog',
    icon: '/window.svg'
  },
   {
    title: '博客 & 网络日志',
    description: '播客思想，分享技术、生活、思考。一个人可以走得很快，但一群人可以走得更远',
    linkUrl: '/zh/blog',
    icon: '/window.svg'
  },
   {
    title: '个人简历',
    description: 'JoneySli的个人简历，5年开发经验，从移动端到游戏开发的技术历程',
    linkUrl: '/zh/resume',
    icon: '/window.svg'
  },
]

export default function Home() {
  return (
    <div className="pixel-grid min-h-screen">
      <div className="pixel-container">
        {/* 顶部像素风格盒子布局 */}
        <Card className="home-top" >
          <h1 className="pixel-text1">Iamjoney</h1>
        </Card>

        <Card className="home-info" noStyle={true} >
          <div className="home-info-content">
            <Card title="关于我" className="mb-20">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3">
                  <div className="relative w-48 h-48 mx-auto">
                    <div className="absolute inset-0 bg-black p-2">
                      <div className="w-full h-full bg-white p-2">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-4xl">👨‍💻</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="mb-4 pixel-text text-sm">
                    👨‍💻 我是JoneySli，原名李世增，拥有5年各个专业开发领域的经验。
                  </p>
                  <p className="mb-4 pixel-text text-sm">
                    2022年受邀作为掘金主办的重庆前端交流大会嘉宾分享者。
                    具备Node.js和React Web开发经验，以及包括Android/iOS/React Native在内的原生应用开发经验。
                  </p>
                  <p className="mb-4 pixel-text text-sm">
                    我的主要专长在移动端开发（React、React Native、iOS、Android）。自2024年起转向游戏客户端开发，
                    目前在网易广州担任eFootball项目的游戏客户端开发工程师。
                  </p>
                  <p className="mb-4 pixel-text text-sm">
                    我的主站是
                    <a href="https://iamjoney.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                      iamjoney.com
                    </a>
                    。我热爱探索新技术，并乐于分享我的知识和经验。
                  </p>
                  
                  <Card noStyle>
                    <h4 className="pixel-text text-sm font-bold mb-2">💡 程序员名言:</h4>
                    <p className="pixel-text text-xs text-gray-700">
                      &ldquo;Stay hungry, stay foolish.&rdquo; - Steve Jobs
                    </p>
                  </Card>
                </div>
              </div>
            </Card>


          </div>
        </Card>

        <Card title="技能树" className="home-project-2" >
          <div className="grid grid-cols-3 gap-2 justify-items-start items-start px-2 md:px-3">
            <div className="home-skill-pane1">
              <SkillPane
                title="编程语言"
                skills={["C++", "C#", "Python", "JavaScript", "Java", "Swift", "OC"]}
                rating={4}
              />
            </div>

            <div className="home-skill-pane2">
              <SkillPane
                title="框架 & 技术"
                skills={["React", ".NET Core", "Node.js", "NestJS", "Next.js", "React Native", "Uniapp", "微信小程序"]}
                rating={5}
              />
            </div>
            <div className="home-skill-pane3">
              <SkillPane
                title="游戏开发"
                skills={["UE4", "UE5", "Godot"]}
                rating={4}
                className="mb-0"
              />
            </div>
          </div>
        </Card>

        <Card title="个人项目" className="mb-20 home-project">
          <div className="grid grid-cols-4 gap-2 justify-items-start items-start px-2 md:px-3">
            {ProjectCardData.map((p, idx) => (
              <ProjectCard
                key={idx}
                title={p.title}
                description={p.description}
                linkUrl={p.linkUrl}
                linkText="查看详情"
                icon={<Image src={p.icon} alt={p.title} width={40} height={40} />}
              />
            ))}
          </div>
        </Card>


        {/* 页脚 */}
        <Footer />
      </div>
    </div>
  );
}
