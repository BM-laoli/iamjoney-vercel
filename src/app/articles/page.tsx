import { Suspense } from 'react';
import ArticlesClient from './ArticlesClient';
import Footer from '@/components/Footer';
import { request } from '@/utils/request';

// 服务端组件 - 负责数据获取和 SEO
export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; post?: string }>;
}) {
  // 等待 searchParams
  const params = await searchParams;

  // 解析 URL 参数 - 添加错误处理
  const parseId = (value: string | undefined): number | null => {
    if (!value) return null;
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? null : parsed;
  };

  
  // 服务端获取数据
  const categoriesData = await request.GET_Categories()
  const initialCategoryId = parseId(params.category) || 
    (categoriesData.success && categoriesData.data.length > 0 ? categoriesData.data[0].id : null);
  const postsResponse = await request.GET_Posts({
    category_id: Number(initialCategoryId),
    page:1,
    limit:999,
  })
    // 默认情况下取 categoriesData 对应文章的第一个
    
  const initialPostId = parseId(params.post) || 
  postsResponse.success && postsResponse.data.posts.length > 0 ? postsResponse.data.posts[0]?.id : null;

  const postsData = postsResponse;

  
  // 验证参数有效性
  let finalCategoryId = initialCategoryId;
  let finalPostId = initialPostId;

  if (categoriesData.success && initialCategoryId) {
    const categoryExists = categoriesData.data.find(c => c.id === initialCategoryId);
    if (!categoryExists) {
      console.log('讲道理这个Function一般不会进入')
      finalCategoryId = categoriesData.data.length > 0 ? categoriesData.data[0].id : null;
      finalPostId = null;
    }
  }

  // 如果指定了文章ID，验证文章是否存在并获取对应分类
  if (postsData.success && finalPostId) {
    console.log('一般这个Function 会进入')
    const targetPost = postsData.data.posts.find(p => p.id === finalPostId);
    if (targetPost) {
      finalCategoryId = targetPost.category_id;
    } else {
      finalPostId = null;
    }
  }

  // console.log('校验---->', {
  //   categoriesData:categoriesData.data,
  //   posts:postsData.data.posts,
  //   finalCategoryId,
  //   finalPostId
  // })
  return (
    <div className='pixel-grid min-h-screen'>
      <div className='pixel-container'>
        <Suspense fallback={<ArticlesLoading />}>
          <ArticlesClient
            categories={categoriesData.success ? categoriesData.data : []}
            posts={postsData.success ? postsData.data.posts : []}
            initialCategoryId={finalCategoryId}
            initialPostId={finalPostId}
          />
        </Suspense>
        <Footer />
      </div>
    </div>
  );
}

// 加载组件
function ArticlesLoading() {
  return (
    <div className='pixel-container flex justify-center items-center min-h-96'>
      <div className='pixel-text text-xl animate-pulse'>📚 Loading...</div>
    </div>
  );
}

// 生成元数据// 生成元数据
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; post?: string }>;
}) {
  const params = await searchParams;
  
  // 默认元数据
  const defaultMetadata = {
    title: "Joney's Articles",
    description: 'TiKing EveryThing~~~',
    keywords: 'Tech Blog, FullStack, React, App, GamePlayer, UnrealEngin',
  };

  try {
    // 如果指定了文章ID，获取文章详情
    if (params.post) {
      const postId = parseInt(params.post, 10);
      if (!isNaN(postId)) {
        const postResponse = await request.GET_Posts({ id: String(postId) });
        
        if (postResponse.success && postResponse.data) {
          /* @typescript-eslint/no-explicit-any */
          const post = postResponse.data as any;
          
          return {
            title: `${post.title} - Joney's Articles`,
            description: post.seo_description || post.description || defaultMetadata.description,
            keywords: post.seo_keyword || defaultMetadata.keywords,
            openGraph: {
              title: post.title,
              description: post.seo_description || post.description || defaultMetadata.description,
              type: 'article',
              url: post.posts_url, // 如果有原文链接
              siteName: `Joney's Articles`,
            },
            twitter: {
              card: 'summary_large_image',
              title: post.title,
              description: post.seo_description || post.description || defaultMetadata.description,
            },
            // 结构化数据
            other: {
              'article:author': 'Joney',
              'article:section': post.category_name,
              'article:published_time': new Date(post.create_time).toISOString(),
              ...(post.update_time && {
                'article:modified_time': new Date(post.update_time).toISOString()
              }),
            },
          };
        }
      }
    }
    
    // 如果指定了分类，获取分类信息
    if (params.category) {
      const categoryId = parseInt(params.category, 10);
      if (!isNaN(categoryId)) {
        const categoriesResponse = await request.GET_Categories();
        
        if (categoriesResponse.success) {
          const category = categoriesResponse.data.find(c => c.id === categoryId);
          
          if (category) {
            return {
              title: `${category.name} - Joney's Articles`,
              description: category.description || defaultMetadata.description,
              keywords: `${category.name}, ${defaultMetadata.keywords}`,
              openGraph: {
                title: `${category.name} - Joney's Articles`,
                description: category.description || defaultMetadata.description,
                type: 'website',
                siteName: `Joney's Articles`,
              },
              twitter: {
                card: 'summary',
                title: `${category.name} - Joney's Articles`,
                description: category.description || defaultMetadata.description,
              },
            };
          }
        }
      }
    }
    
  } catch (error) {
    console.error('生成元数据时出错:', error);
    // 出错时仍然返回默认元数据，而不是让页面崩溃
  }

  // 返回默认元数据
  return {
    title: defaultMetadata.title,
    description: defaultMetadata.description,
    keywords: defaultMetadata.keywords,
    openGraph: {
      title: defaultMetadata.title,
      description: defaultMetadata.description,
      type: 'website',
      siteName: `Joney's Articles`,
    },
    twitter: {
      card: 'summary',
      title: defaultMetadata.title,
      description: defaultMetadata.description,
    },
  };
}