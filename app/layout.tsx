import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

export const metadata: Metadata = {
  title: "Iamjoeny",
  // description: "这可能是你看过最全的 「NestJS」 教程了, 探索最全面的Nest指南,从入门到精通,助您掌握这一流行的Node.js框架。逐步学习核心概念,并从零开始构建强大的应用程序。深入项目实践，构建高效可扩展的应用程序;",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
      <body>
      {children}
      <SpeedInsights />  
      </body>
      </>
  );
}
