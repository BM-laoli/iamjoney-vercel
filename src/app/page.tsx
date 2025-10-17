import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import Card from "@/components/Card";
import SkillPane from "@/components/SkillPane";
import './pages.css'
import Footer from "@/components/Footer";
import D3Skill from "@/components/D3_Skill/D3_Skill";
import { PhoneFanCardClient } from "@/components/PhoneFanCard/PhoneFanCard";

const ProjectCardData = [
  {
    
    title: '✨Articles✨',
    description: `Joney's All new Articles , exp: Python/Cpp/Unreal/Godot/Unitry...`,
    linkUrl: '/articles',
    icon: '/window.svg'
  },
  {
    title: 'NestJS/Node.js Column',
    // subtitle: 'Nest指南全网免费的最全面Nest指南',
    description: 'Comprehensive guide, in-depth yet accessible, well-structured, synchronized with Nest updates',
    // linkType: 'external' as const,
    linkUrl: '/nestjs-tutorial',
    icon: '/window.svg'
  },
  {
    title: 'Blog & Web Journal',
    description: 'Broadcasting thoughts, sharing technology, life, and reflections. One person can excel, but a team can go further',
    linkUrl: '/blog',
    icon: '/window.svg',
  },
   {
    title: 'Cross-Platform Development Column',
    description: 'Cross-platform technologies, React Native, Flutter, Android, iOS, HarmonyOS, technical exploration',
    linkUrl: '/cross-platform-blog',
    icon: '/window.svg'
  },
   {
    title: 'Resume',
    description: 'JoneySli&apos;s personal resume, 5 years of development experience, technical journey from mobile to game development',
    linkUrl: '/resume',
    icon: '/window.svg'
  },
  
]

// const SkillData = {
//   'Languages': [
//     // "C++", "C#", "Python", "JavaScript", "Java", "Swift", "OC"
//     {
//       name: 'JavaScript',
//       rating: 5,
//     },
//     {
//       name: 'C++',
//       rating: 3,
//     },
//     {
//       name: 'C#',
//       rating: 4,
//     },
//     {
//       name: 'Python',
//       rating: 4,
//     },
//     {
//       name: 'Java',
//       rating: 4,
//     },
//     {
//       name: 'OC',
//       rating: 3,
//     },
//     {
//       name: 'Golang',
//       rating: 3,
//     },
//     {
//       name: 'Swift',
//       rating: 3,
//     },
//   ],
//   'Frameworks': [
//     // "React", "Vue", "Angular", "Flutter", "Electron"
//     {
//       name: 'React',
//       rating: 5,
//     },
//     {
//       name: 'React-Native',
//       rating: 5,
//     },
//     {
//       name: 'Nodejs',
//       rating: 5,
//     },
//     {
//       name: 'Nestjs',
//       rating: 5,
//     },
//     {
//       name: '.NetCore',
//       rating: 3,
//     },
//     {
//       name: 'Nextjs',
//       rating: 4,
//     },
//     {
//       name: 'WeChat Mini Program',
//       rating: 3,
//     },
//     {
//       name: 'DApp',
//       rating: 3,
//     },
//   ],
//   'GameDevelopment': [
//     {
//       name: 'Unreal Engine (UE)',
//       rating: 3,
//     },
//     {
//       name: 'GoDot',
//       rating: 3,
//     },
//     {
//       name: 'Unity',
//       rating: 2,
//     }
//   ],
// }

export default function Home() {
 



  return (
    <div className="pixel-grid min-h-screen">
      <div className="pixel-container">
        {/* 顶部像素风格盒子布局 */}
        <Card className="home-top" >
          <h1 className="pixel-text1">
            Iamjoney
          </h1>
          <span className="pixel-text1">React Native /.NetCore /Nodejs /UE /C++ </span>
        </Card>

        <Card className="home-info flex" noStyle={true} >
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
                      &ldquo;Stay hungry, stay foolish.&rdquo; - Steve Jobs
                    </p>
                  </Card>
                </div>
              </div>
            </Card>
         
          </div>

          <Card title="Skill Tree" className="home-project-2 ml-20" >
            <D3Skill ></D3Skill>
          </Card>
        </Card>

        <Card title="Business Project: App" className="mb-20 home-project">
          <PhoneFanCardClient />
        </Card>

        {/* <Card title="Skill Tree" className="home-project-2" >
          <div className="grid grid-cols-3 gap-2 justify-items-start items-start px-2 md:px-3">
            <div className="home-skill-pane1">
              <SkillPane
                title="Programming Languages"
                skills={ SkillData.Languages}
              />
            </div>

            <div className="home-skill-pane2">
              <SkillPane
                title="Frameworks & Technologies"
                skills={SkillData.Frameworks}/>
            </div>
            <div className="home-skill-pane3">
              <SkillPane
                title="Game Development"
                skills={SkillData.GameDevelopment}
                className="mb-0"
              />
            </div>
          </div>
        </Card> */}

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
