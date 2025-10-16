'use client';

import Card from '@/components/Card';
import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import './style.css';
import { useDeepCompareEffect } from 'ahooks';
import { request } from '@/utils/request';

// 这个页面不要引入 SSR 服务端渲染的东西

// 接口定义
export interface Post {
  id: number;
  title: string;
  description: string;
  posts_url: string;
  seo_keyword: string;
  category_id: number;
  seo_description: string;
  create_time: number;
  update_time: number | null;
  category_name: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  create_time: number;
  update_time: number;
}

export interface ArticlesClientProps {
  categories: Category[];
  posts: Post[];
  initialCategoryId: number | null;
  initialPostId: number | null;
}

export default function ArticlesClient({
  categories,
  posts: allPosts,
  initialCategoryId,
  initialPostId,
}: ArticlesClientProps) {
  const router = useRouter();

  // 状态管理
  const [posts, setPosts] = useState<{ [key: number]: Post[] }>({});
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    initialCategoryId
  );
  const [selectedPostId, setSelectedPostId] = useState<number | null>(
    initialPostId
  );
  const [currentPost, setCurrentPost] = useState<Post | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // 根据分类过滤文章并设置到 posts 状态中
  const organizePostsByCategory = useCallback(() => {
    const organized: { [key: number]: Post[] } = {};
    allPosts.forEach((post) => {
      if (!organized[post.category_id]) {
        organized[post.category_id] = [];
      }
      organized[post.category_id].push(post);
    });
    setPosts(organized);
  }, [allPosts]);

  // 更新URL参数
  const updateUrl = useCallback(
    (categoryId: number | null, postId: number | null) => {
      const params = new URLSearchParams();

      if (categoryId) {
        params.set('category', categoryId.toString());
      }

      if (postId) {
        params.set('post', postId.toString());
      }

      const newUrl = params.toString()
        ? `/articles?${params.toString()}`
        : '/articles';

      router.replace(newUrl, { scroll: false });
    },
    [router]
  );

  // 处理分类切换
  const handleCategoryChange = async (categoryId: number) => {
    setSelectedCategoryId(categoryId);
    setSelectedPostId(null);
    setCurrentPost(null);

    // 选择该分类的第一篇文章（如果存在）
    // 注意 选中分类的时候 posts 还没有更新，所以无法选中第一个posts 因为这个分类下的post数据还没有获取回来
    const categoryPosts = posts[categoryId] || [];

    if (categoryPosts.length > 0) {
      const firstPost = categoryPosts[0];
      setSelectedPostId(firstPost.id);
      setCurrentPost(firstPost);
      updateUrl(categoryId, firstPost.id);
    } else {
      updateUrl(categoryId, null);
      try {
        const newPostsRes = await request.GET_Posts({
          category_id: categoryId,
          page: 1,
          limit: 999,
        });

        if (newPostsRes.success && newPostsRes.data.posts.length > 0) {
          const newPosts = newPostsRes.data.posts;

          setPosts((prevPosts) => ({
            ...prevPosts,
            [categoryId]: newPosts,
          }));

          const firstPost = newPosts[0];
          setSelectedPostId(firstPost.id);
          setCurrentPost(firstPost);
          updateUrl(categoryId, firstPost.id);
        }
      } catch (error) {
        console.error('获取文章失败:', error);
      }
    }
  };

  // 处理文章选择
  const handlePostSelect = useCallback(
    (post: Post) => {
      setSelectedPostId(post.id);
      setCurrentPost(post);
      updateUrl(selectedCategoryId, post.id);
    },
    [selectedCategoryId, updateUrl]
  );

  // 处理返回按钮
  const handleGoBack = useCallback(() => {
    router.push('/');
  }, [router]);

  // 初始化文章组织
  useEffect(() => {
    organizePostsByCategory();
  }, []);

  // 初始化逻辑
  useDeepCompareEffect(() => {
    if (
      isInitialized ||
      !allPosts.length ||
      !categories.length ||
      Object.keys(posts).length === 0
    )
      return;

    let finalPost: Post | null = null;
    let finalCategoryId = initialCategoryId;
    let finalPostId = initialPostId;

    // 如果有指定文章ID，查找该文章
    if (initialPostId) {
      const post = allPosts.find((p) => p.id === initialPostId);
      if (post) {
        finalPost = post;
        finalCategoryId = post.category_id;
        finalPostId = post.id;
      }
    }

    // 如果没有找到指定文章，但有分类，选择该分类的第一篇
    if (!finalPost && finalCategoryId && posts[finalCategoryId]) {
      const categoryPosts = posts[finalCategoryId];
      if (categoryPosts.length > 0) {
        finalPost = categoryPosts[0];
        finalPostId = finalPost.id;
      }
    }

    // 如果还是没有，选择第一个分类的第一篇文章
    if (!finalPost && categories.length > 0) {
      finalCategoryId = categories[0].id;
      const firstCategoryPosts = posts[finalCategoryId] || [];
      if (firstCategoryPosts.length > 0) {
        finalPost = firstCategoryPosts[0];
        finalPostId = finalPost.id;
      }
    }

    // 更新状态
    setSelectedCategoryId(finalCategoryId);
    setSelectedPostId(finalPostId);
    setCurrentPost(finalPost);
    setIsInitialized(true);
  }, [
    allPosts,
    categories,
    initialCategoryId,
    initialPostId,
    posts,
    isInitialized,
  ]);

  // 防止 hydration 不匹配
  if (!isInitialized) {
    return (
      <div className='pixel-container flex justify-center items-center min-h-96'>
        <div className='pixel-text text-xl animate-pulse'>📚 初始化中...</div>
      </div>
    );
  }

  return (
    <>
      <div className='flex justify-start mt-10 mb-6'>
        <Card className='mb-6 w-fit'>
          <button onClick={handleGoBack} className='pixel-button inline-block'>
            ← Back to Home
          </button>
        </Card>
        <Card className='ml-20' noStyle>
          <p>
            Currently Joney's articles are created on Feishu platform, this
            personal site is used to systematically share with everyone
          </p>
        </Card>
      </div>

      <div className='flex justify-end '>
        {/* 左边是正文内容 */}
        <Card className='mt-20 mb-20 w-8/12 p-8' noStyle>
          {currentPost ? (
            <article className='prose prose-lg max-w-none'>
              {/* 文章头部 */}
              <header className='mb-8 pb-6 border-b-2 border-gray-200'>
                <div className='flex items-center gap-2 mb-4'>
                  <span className='px-3 py-1 bg-blue-100 text-blue-600 rounded text-sm pixel-text'>
                    {currentPost.category_name}
                  </span>
                  <span className='text-gray-400 text-sm'>
                    {new Date(
                      currentPost.create_time * 1000
                    ).toLocaleDateString('zh-CN')}
                  </span>
                </div>
                <h1 className='text-3xl font-bold pixel-text text-gray-800 mb-4 leading-tight'>
                  {currentPost.title}
                </h1>
                <p className='text-lg text-gray-600 pixel-text leading-relaxed'>
                  {currentPost.description}
                </p>
                {currentPost.seo_keyword && (
                  <div className='flex flex-wrap gap-2 mt-4'>
                    {currentPost.seo_keyword
                      .split(',')
                      .map((keyword, index) => (
                        <span
                          key={index}
                          className='px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs pixel-text'
                        >
                          {keyword.trim()}
                        </span>
                      ))}
                  </div>
                )}
              </header>

              {/* 文章内容区域 - 使用 iframe */}
              <div className='articles-iframe-wrap'>
                <iframe
                  ref={iframeRef}
                  src={currentPost.posts_url}
                  frameBorder='0'
                  style={{
                    width: '100%',
                    height: '650px',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    marginTop: '-65px',
                  }}
                />
              </div>

              {/* 文章底部信息 */}
              <footer className='pt-6 border-t-2 border-gray-200 mt-not-65' >
                <div className='flex items-center justify-between text-sm text-gray-500'>
                  <div>SEO Description: {currentPost.seo_description}</div>
                  {currentPost.update_time && (
                    <div>
                      Updated:{' '}
                      {new Date(
                        currentPost.update_time * 1000
                      ).toLocaleDateString('zh-CN')}
                    </div>
                  )}
                </div>
              </footer>
            </article>
          ) : (
            <div className='text-center py-20'>
              <div className='text-6xl mb-6'>📚</div>
              <h2 className='text-2xl font-bold pixel-text text-gray-600 mb-4'>
                Select an article to start reading
              </h2>
              <p className='text-gray-500 pixel-text'>
                Choose an interesting article from the categories on the right
              </p>
            </div>
          )}
        </Card>

        <div className='flex gap-8 mt-20 mb-20 w-4/12 flex-col ml-20'>
          {/* 右边1 是分类固定置顶 不展示文章 */}
          <Card className='w-9.2/10 p-6' noStyle>
            <div className='pixel-border-header mb-4'>
              <h3 className='text-lg font-bold pixel-text'>
                📂 Article Categories
              </h3>
            </div>
            <ul className='space-y-2 category-list-scroll'>
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategoryChange(category.id)}
                    className={`flex category-item-item w-full text-left p-3 rounded-lg transition-colors pixel-text ${
                      selectedCategoryId === category.id
                        ? 'bg-blue-100 text-blue-700 border-2 border-blue-300'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div>
                      <div className='font-medium'>{category.name}</div>
                      <div className='text-xs text-gray-500 mt-1 line-clamp-2'>
                        {category.description}
                      </div>
                    </div>
                    <div className='text-xs text-gray-500 flex items-center justify-between'>
                      {selectedCategoryId === category.id && (
                        <span className='text-green-600'>● Current</span>
                      )}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </Card>

          {/* 右边2 是当前分类下的所有文章 高亮当前这一篇 */}
          <Card className='w-9.2/10 p-6' noStyle>
            <div className='pixel-border-header mb-4'>
              <h3 className='text-lg font-bold pixel-text'>
                📝{' '}
                {categories.find((c) => c.id === selectedCategoryId)?.name ||
                  'Article List'}{' '}
                <span>Article List</span>
              </h3>
            </div>

            {selectedCategoryId && posts[selectedCategoryId] ? (
              <ul className='space-y-3 category-list-scroll-350'>
                {posts[selectedCategoryId].map((post) => (
                  <li key={post.id}>
                    <button
                      onClick={() => handlePostSelect(post)}
                      className={`w-full text-left p-3 rounded-lg transition-colors pixel-text ${
                        selectedPostId === post.id
                          ? 'bg-green-100 text-green-800 border-2 border-green-300'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <div className='font-medium text-sm line-clamp-2 mb-1'>
                        {post.title}
                      </div>
                      <div className='text-xs text-gray-500 flex items-center justify-between'>
                        <span>
                          {new Date(post.create_time * 1000).toLocaleDateString(
                            'zh-CN'
                          )}
                        </span>
                        {selectedPostId === post.id && (
                          <span className='text-green-600'>● Current</span>
                        )}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className='text-center py-8 text-gray-500'>
                <div className='text-2xl mb-2'>📭</div>
                <p className='text-sm pixel-text'>No articles available</p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </>
  );
}
