/* eslint-disable @typescript-eslint/no-explicit-any */

import fs from 'fs'
import path from 'path'

const StaticMap: { [key: string]: string } = {
  "/blog/404": "public/statichtml/blog/404.html",
  "/blog/about-me": "public/statichtml/blog/about-me.html",
  "/blog/index": "public/statichtml/blog/index.html",
  "/blog/shanxing/2023-12": "public/statichtml/blog/shanxing/2023-12.html",
  "/blog/shanxing/2024-01": "public/statichtml/blog/shanxing/2024-01.html",

   "/cross-platform/404": "public/statichtml/cross-platform/404.html",
  "/cross-platform/about-me": "public/statichtml/cross-platform/about-me.html",
  "/cross-platform/index": "public/statichtml/cross-platform/index.html",
  "/cross-platform/src/rn/p1": "public/statichtml/cross-platform/src/rn/p1.html",
  "/cross-platform/src/rn/p2": "public/statichtml/cross-platform/src/rn/p2.html",
  "/cross-platform/src/rn/p3": "public/statichtml/cross-platform/src/rn/p3.html",
  "/cross-platform/src/rn/p4": "public/statichtml/cross-platform/src/rn/p4.html",
  "/cross-platform/src/rn/p5": "public/statichtml/cross-platform/src/rn/p5.html",
  
  
    "/index/404": "public/statichtml/index/404.html",
    "/index/about-me": "public/statichtml/index/about-me.html",
    "/index/index": "public/statichtml/index/index.html",
    "/index/phase1/p1-1": "public/statichtml/index/phase1/p1-1.html",
    "/index/phase1/p1-2": "public/statichtml/index/phase1/p1-2.html",
    "/index/phase1/p1-3": "public/statichtml/index/phase1/p1-3.html",
    "/index/phase1/p1-4": "public/statichtml/index/phase1/p1-4.html",
    "/index/phase2/p2-1": "public/statichtml/index/phase2/p2-1.html",
    "/index/phase2/p2-2": "public/statichtml/index/phase2/p2-2.html",
    "/index/phase2/p2-3": "public/statichtml/index/phase2/p2-3.html",
    "/index/phase2/p2-4": "public/statichtml/index/phase2/p2-4.html",
    "/index/phase2/p2-5": "public/statichtml/index/phase2/p2-5.html",
    "/index/phase2/p2-6": "public/statichtml/index/phase2/p2-6.html",
    "/index/phase2/p2-7": "public/statichtml/index/phase2/p2-7.html",
    "/index/phase3/p3-1": "public/statichtml/index/phase3/p3-1.html",
    "/index/phase3/p3-2": "public/statichtml/index/phase3/p3-2.html",
    "/index/phase3/p3-3": "public/statichtml/index/phase3/p3-3.html"
}

// 用正则提取 meta 标签
function extractMetaTags(html: string) {
  const metaTags: { name?: string; property?: string; content?: string }[] = []
  const metaRegex = /<meta\s+([^>]+?)\/?>/gi
  let match: RegExpExecArray | null

  while ((match = metaRegex.exec(html)) !== null) {
    const attrString = match[1]
    const nameMatch = attrString.match(/name=["'](.*?)["']/i)
    const propertyMatch = attrString.match(/property=["'](.*?)["']/i)
    const contentMatch = attrString.match(/content=["'](.*?)["']/i)

    if (nameMatch || propertyMatch || contentMatch) {
      metaTags.push({
        name: nameMatch ? nameMatch[1] : undefined,
        property: propertyMatch ? propertyMatch[1] : undefined,
        content: contentMatch ? contentMatch[1] : undefined,
      })
    }
  }

  return metaTags
}

export default function StaticHtml({ path: pagePath }: { path: string }) {
  const filePath = StaticMap[pagePath] ?? 'public/statichtml/blog/404.html'
  const html = fs.readFileSync(path.join(process.cwd(), filePath), 'utf8')

  const metaTags = extractMetaTags(html)

  return (
    <>
      <head>
        {metaTags.map((m, idx) => {
          const props: any = {}
          if (m.name) props.name = m.name
          if (m.property) props.property = m.property
          if (m.content) props.content = m.content
          return <meta key={idx} {...props} />
        })}
      </head>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}
