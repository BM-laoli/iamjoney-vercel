"use client";
import Card from "@/components/Card";

export default function ResumePage() {
  return (
    <div className="min-h-screen pixel-grid">
      <div className="pixel-container py-8">
        {/* Back Button */}
        <Card className="mb-6 w-fit">
          <button 
            onClick={() => window.history.back()} 
            className="pixel-button inline-block"
          >
            ← Back
          </button>
        </Card>

        {/* Overview */}
        <Card className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 pixel-text">Personal Resume</h1>
          <p className="pixel-text text-sm md:text-base">26 years old · 5 years experience · Bachelor's degree · Currently employed (not considering offers)</p>
          <p className="pixel-text text-sm md:text-base mt-2">Recent years: React Native / UE Game Client · NetEase Guangzhou</p>
        </Card>

        {/* Tech Stack */}
        <Card title="Tech Stack" className="mb-10">
          <p className="pixel-text text-sm md:text-base">
            React · Node.js · TypeScript · React Native · .NET Core (C#) · iOS (Native) · Full Stack (React + Node.js + .NET Core)
          </p>
          <p className="pixel-text text-sm md:text-base mt-3">
            Invited guest speaker at 2022 Chongqing Frontend Exchange Conference &ldquo;Tongzhou&rdquo;; continuously expanding boundaries from frontend development. Former senior engineer at Newegg, one of North America&apos;s top four e-commerce companies.
          </p>
          <p className="pixel-text text-sm md:text-base mt-2">Desired position: Game Client/Frontend React · Industry flexible · Salary: Negotiable</p>
        </Card>

        {/* Work Experience */}
        <Card title="Work Experience" className="mb-10">
          {/* NetEase Guangzhou */}
          <Card noStyle={true} className="mb-6">
            <h3 className="font-bold pixel-text">Sep 2024 - Present · NetEase Guangzhou (Outsourced by Fabon) · Game Client Developer · eFootball Studio</h3>
            <p className="pixel-text mt-1">Tech Keywords: React Native / React / UE / Python / .NET Core / Node</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm pixel-text">
              <li>Current focus: Frontend + Game Client + .NET Full Stack</li>
              <li>Successful career transition (Frontend → Game Client + Frontend)</li>
              <li>Successfully launched eFootball China PC version</li>
              <li>Built game box sub-module architecture from scratch (including data sync, CSV sync, hot update solutions)</li>
              <li>Successfully launched eFootball game box on three platforms (Taro)</li>
            </ul>
            <p className="pixel-text mt-2">Responsibilities: Maintain React Native App (Taro) and game box projects, while writing UE client code (Python / C++ / Blueprint).</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm pixel-text">
              <li>Lead game box App development, ensuring stability and user experience (Lead Developer)</li>
              <li>Responsible for eFootball Online China client development and performance optimization</li>
            </ul>
          </Card>

          {/* Newegg */}
          <Card noStyle={true} className="mb-6">
            <h3 className="font-bold pixel-text">Aug 2021 - Nov 2023 · Newegg Technology (Chengdu) · Full Stack Engineer (Frontend-focused) · MIS-EC</h3>
            <p className="pixel-text mt-1">Tech Keywords: Docker / MySQL / React / .NET</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm pixel-text">
              <li>Developed Newegg Seller App from scratch, published on App Store / Google Play / App Store China, 100+ daily active users domestically</li>
              <li>Shopify plugin published on Shopify App Store</li>
              <li>Assisted large e-commerce backend migration from Angular to React</li>
              <li>Designed and implemented App development pipeline and infrastructure from scratch</li>
            </ul>
            <p className="pixel-text mt-2">Responsibilities: ToC (newegg.com) and ToB (Seller App, Seller Portal Admin) development, online customer service tools and WordPress sites and other supporting projects.</p>
          </Card>

          {/* Hunan Tianyun */}
          <Card noStyle={true} className="mb-2">
            <h3 className="font-bold pixel-text">Aug 2020 - Jan 2021 · Hunan Tianyun Software Technology Co., Ltd. · Frontend Developer</h3>
            <p className="pixel-text mt-1">Tech Keywords: TypeScript / React / JavaScript / CSS3 / HTML5</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm pixel-text">
              <li>Product line frontend lead, organized technical discussions and technology selection; led frontend architecture design for two large-scale applications</li>
              <li>Proficient in React / Vue / Angular · Mastered Golang and Node; led project frontend modular architecture</li>
            </ul>
          </Card>
        </Card>

        {/* Project Experience */}
        <Card title="Project Experience" className="mb-10">
          <div className="space-y-6">
            {/* eFootball Game Box */}
            <Card noStyle={true}>
              <h3 className="font-bold pixel-text">2024.09 - Present · eFootball Game Box (Taro Multi-platform)</h3>
              <p className="pixel-text">Tech Stack: Taro · React · TypeScript · Python · UE</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm pixel-text">
                <li>Built game box sub-module architecture from scratch, including data sync, CSV sync, and hot update solutions</li>
                <li>Successfully launched on three platforms (iOS / Android / Mini Program)</li>
                <li>Responsible for overall architecture design and core module development</li>
                <li>Implemented efficient data synchronization mechanism to ensure real-time updates across platforms</li>
              </ul>
            </Card>

            {/* eFootball Online China */}
            <Card noStyle={true}>
              <h3 className="font-bold pixel-text">2024.09 - Present · eFootball Online China Client</h3>
              <p className="pixel-text">Tech Stack: UE · Python · C++ · Blueprint</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm pixel-text">
                <li>Responsible for eFootball Online China client development and performance optimization</li>
                <li>Successfully launched eFootball China PC version</li>
                <li>Implemented game client core features and UI systems</li>
                <li>Optimized game performance to ensure smooth user experience</li>
              </ul>
            </Card>

            {/* Online Chat */}
            <Card noStyle={true}>
              <h3 className="font-bold pixel-text">2022.11 - 2023.11 · Newegg Online Chat · Full Stack (.NET Core)</h3>
              <p className="pixel-text">Tech Stack: React · .NET Core · Node.js (SSR + Nest BFF)</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm pixel-text">
                <li>Refactored and improved comprehensive business documentation; organized third-party platform, backend and frontend collaboration details</li>
                <li>Optimized Config module: configuration items reduced from 11 → 7, hierarchy reduced by 2 levels, decoupled branch logic</li>
                <li>Rewrote embedded script SDK, reducing integration costs for other teams</li>
                <li>Implemented intelligent context judgment with automatic queue distribution</li>
                <li>Systematically fixed historical defects and completed missing documentation</li>
              </ul>
              <p className="pixel-text mt-2">
                Project Links:
                <a className="text-blue-600 underline" href="https://kb.newegg.com/contact-us" target="_blank" rel="noopener noreferrer">https://kb.newegg.com/contact-us</a>
                ,
                  <a className="text-blue-600 underline" href="https://www.newegg.com/" target="_blank" rel="noopener noreferrer">Newegg</a>
              </p>
            </Card>

            {/* Seller App */}
            <Card noStyle={true}>
              <h3 className="font-bold pixel-text">2021.08 - 2023.11 · Newegg Seller App · Project Owner</h3>
              <p className="pixel-text">Tech Stack: React Native · iOS/Android · Node.js</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm pixel-text">
                <li>RN engineering architecture design / packaging and sub-packaging platform design</li>
                <li>Bridged MobPush Android / iOS SDK for push notifications</li>
                <li>Designed and developed Message and Order core modules</li>
                <li>Designed RN WebView H5 SDK; integrated group H5 unified login (Nest + Redis + WebView)</li>
              </ul>
              <p className="pixel-text mt-2">
                Project Link:
                <a className="text-blue-600 underline" href="https://apps.apple.com/cn/app/newegg-seller/id1602794897" target="_blank" rel="noopener noreferrer">App Store</a>
              </p>
            </Card>

            {/* Meituan Diandekuai */}
            <Card noStyle={true}>
              <h3 className="font-bold pixel-text">2021.01 - 2021.08 · Meituan Diandekuai · Senior Frontend Engineer</h3>
              <p className="pixel-text">Tech Stack: iOS/Android + React H5 · Hybrid</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm pixel-text">
                <li>Built merchant registration module, migrated and improved printing capabilities</li>
                <li>Implemented QR code location management and QR code generation/saving</li>
                <li>Responsible for merchant business settings module; contributed PRs to internal component library</li>
              </ul>
            </Card>
          </div>
        </Card>

        {/* Education */}
        <Card title="Education" className="mb-10">
          <Card noStyle={true}>
            <h3 className="font-bold pixel-text">2017.09 - 2021.06 · Hunan University of Technology · Bachelor of Engineering · Software Engineering</h3>
            <p className="pixel-text mt-1">GPA: 3.2/4.0 · Core Courses: Data Structures, Algorithms, Database Systems, Software Engineering</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm pixel-text">
              <li>Participated in ACM programming contests, enhanced algorithmic thinking</li>
              <li>Led multiple team projects, accumulated project management experience</li>
              <li>Self-taught frontend development, built personal projects</li>
            </ul>
          </Card>
        </Card>

        {/* Certificates/Qualifications - Commented out
        <Card title="Certificates/Qualifications" className="mb-10">
          <Card noStyle={true}>
            <ul className="list-disc pl-5 space-y-1 text-sm pixel-text">
              <li>CET-6 English Certificate</li>
              <li>National Computer Rank Examination Level 2</li>
            </ul>
          </Card>
        </Card>
        */}

        {/* Footer */}
        <Card noStyle={true} className="text-center">
          <p className="pixel-text text-sm text-gray-600">
            Thank you for reading my resume! Looking forward to communicating with you.
          </p>
        </Card>
      </div>
    </div>
  );
}