import Image from "next/image";
import Link from "next/link";
import SkillBar from "@/components/SkillBar";
import ProjectCard from "@/components/ProjectCard";
import Card from "@/components/Card";
import SkillPane from "@/components/SkillPane";
import './pages.css'
import Footer from "@/components/Footer";

const ProjectCardData = [
  {
    title: 'NestJS/Node.js Column',
    // subtitle: 'Nest指南全网免费的最全面Nest指南',
    description: 'Comprehensive guide, in-depth yet accessible, well-structured, synchronized with Nest updates',
    // linkType: 'external' as const,
    linkUrl: '/nestjs-tutorial',
    icon: '/window.svg'
  },
   {
    title: 'Cross-Platform Development Column',
    description: 'Cross-platform technologies, React Native, Flutter, Android, iOS, HarmonyOS, technical exploration',
    linkUrl: '/cross-platform-blog',
    icon: '/window.svg'
  },
   {
    title: 'Blog & Web Journal',
    description: 'Broadcasting thoughts, sharing technology, life, and reflections. One person can excel, but a team can go further',
    linkUrl: '/blog',
    icon: '/window.svg'
  },
   {
    title: 'Resume',
    description: 'JoneySli\'s personal resume, 5 years of development experience, technical journey from mobile to game development',
    linkUrl: '/resume',
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
            <Card title="About Me" className="mb-20">
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
                    👨‍💻 I'm JoneySli, formerly Li Shizeng, with 5 years of experience across various professional development fields.
                  </p>
                  <p className="mb-4 pixel-text text-sm">
                    I was invited as a guest speaker at the 2022 Chongqing Frontend Exchange Conference hosted by Juejin. 
                    I have experience in both Node.js and React web development, as well as native applications including Android/iOS/React Native.
                  </p>
                  <p className="mb-4 pixel-text text-sm">
                    My main expertise lies in mobile development (React, React Native, iOS, Android). Since 2024, I transitioned to game client development 
                    and currently work as a game client developer at NetEase Guangzhou for the eFootball project.
                  </p>
                  <p className="mb-4 pixel-text text-sm">
                    My main website is
                    <a href="https://iamjoney.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                      iamjoney.com
                    </a>
                    . I love exploring new technologies and sharing my knowledge and experience.
                  </p>
                  
                  <div className="mb-4">
                    <a 
                      href="mailto:bmlishizeng@gmail.com" 
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white pixel-text text-sm hover:bg-blue-700 transition-colors border-2 border-black"
                    >
                      📧 Contact Me
                    </a>
                  </div>
                  
                  <Card noStyle>
                    <h4 className="pixel-text text-sm font-bold mb-2">💡 Quotes from Famous Programmers:</h4>
                    <p className="pixel-text text-xs text-gray-700">
                      "Stay hungry, stay foolish." - Steve Jobs
                    </p>
                  </Card>
                </div>
              </div>
            </Card>


          </div>
        </Card>

        <Card title="Skill Tree" className="home-project-2" >
          <div className="grid grid-cols-3 gap-2 justify-items-start items-start px-2 md:px-3">
            <div className="home-skill-pane1">
              <SkillPane
                title="Programming Languages"
                skills={["C++", "C#", "Python", "JavaScript", "Java", "Swift", "OC"]}
                rating={4}
              />
            </div>

            <div className="home-skill-pane2">
              <SkillPane
                title="Frameworks & Technologies"
                skills={["React", ".NET Core", "Node.js", "NestJS", "Next.js", "React Native", "Uniapp", "WeChat Mini Program"]}
                rating={5}
              />
            </div>
            <div className="home-skill-pane3">
              <SkillPane
                title="Game Development"
                skills={["UE4", "UE5", "Godot"]}
                rating={4}
                className="mb-0"
              />
            </div>
          </div>
        </Card>

        <Card title="Personal Projects" className="mb-20 home-project">
          <div className="grid grid-cols-4 gap-2 justify-items-start items-start px-2 md:px-3">
            {ProjectCardData.map((p, idx) => (
              <ProjectCard
                key={idx}
                title={p.title}
                description={p.description}
                linkUrl={p.linkUrl}
                linkText="View Details"
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
