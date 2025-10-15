'use client';

import React, { useState, useEffect } from 'react';
import Card from '@/components/Card';
import Footer from '@/components/Footer';

interface Category {
  id: number;
  name: string;
  description: string;
  create_time: number;
  update_time: number;
}

interface Post {
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

interface PostsResponse {
  success: boolean;
  data: {
    posts: Post[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      pages: number;
    };
  };
}

interface CategoriesResponse {
  success: boolean;
  data: Category[];
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set());
  const [categoryPosts, setCategoryPosts] = useState<Record<number, Post[]>>({});
  const [loading, setLoading] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState<Set<number>>(new Set());

  // 获取分类数据
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/categories');
        const data: CategoriesResponse = await response.json();
        
        if (data.success) {
          setCategories(data.data);
          // 默认展开前两个分类
          const defaultExpanded = new Set(data.data.slice(0, 2).map(cat => cat.id));
          setExpandedCategories(defaultExpanded);
          
          // 为默认展开的分类加载文章
          for (const categoryId of defaultExpanded) {
            fetchPosts(categoryId);
          }
        }
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // 获取指定分类的文章
  const fetchPosts = async (categoryId: number) => {
    if (categoryPosts[categoryId]) return; // 已经加载过了

    setLoadingPosts(prev => new Set(prev).add(categoryId));
    
    try {
      const response = await fetch(`http://localhost:3000/api/v1/posts?category_id=${categoryId}&page=1&limit=50`);
      const data: PostsResponse = await response.json();
      
      if (data.success) {
        setCategoryPosts(prev => ({
          ...prev,
          [categoryId]: data.data.posts
        }));
      }
    } catch (error) {
      console.error(`Failed to fetch posts for category ${categoryId}:`, error);
    } finally {
      setLoadingPosts(prev => {
        const newSet = new Set(prev);
        newSet.delete(categoryId);
        return newSet;
      });
    }
  };

  // 切换分类展开状态
  const toggleCategory = (categoryId: number) => {
    const newExpanded = new Set(expandedCategories);
    
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
      fetchPosts(categoryId);
    }
    
    setExpandedCategories(newExpanded);
  };

  if (loading) {
    return (
      <div className="pixel-grid min-h-screen">
        <div className="pixel-container">
          <Card title="文章分类">
            <div className="pixel-text">加载中...</div>
          </Card>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="pixel-grid min-h-screen">
      <div className="pixel-container">
        <Card title="文章分类">
          <div className="space-y-4">
            {categories.map((category) => (
              <div key={category.id} className="border-2 border-black">
                {/* 分类标题 */}
                <div 
                  className="pixel-button w-full text-left p-4 bg-gray-100 hover:bg-gray-200 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleCategory(category.id)}
                >
                  <div>
                    <h3 className="font-bold text-lg pixel-text">{category.name}</h3>
                    <p className="text-sm text-gray-600 pixel-text">{category.description}</p>
                  </div>
                  <span className="text-xl">
                    {expandedCategories.has(category.id) ? '▼' : '▶'}
                  </span>
                </div>

                {/* 文章列表 */}
                {expandedCategories.has(category.id) && (
                  <div className="p-4 bg-white">
                    {loadingPosts.has(category.id) ? (
                      <div className="pixel-text text-gray-500">加载文章中...</div>
                    ) : categoryPosts[category.id]?.length > 0 ? (
                      <ul className="space-y-2">
                        {categoryPosts[category.id].map((post) => (
                          <li key={post.id} className="border-l-4 border-gray-300 pl-4">
                            <a 
                              href={post.posts_url.replace(/`/g, '')} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="pixel-text hover:text-blue-600 hover:underline block"
                            >
                              <h4 className="font-medium">{post.title}</h4>
                              {post.description && (
                                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                  {post.description.substring(0, 100)}...
                                </p>
                              )}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="pixel-text text-gray-500">该分类下暂无文章</div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
        <Footer />
      </div>
    </div>
  );
}