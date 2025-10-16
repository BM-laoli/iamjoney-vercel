import { Category, Post } from "@/app/articles/ArticlesClient"

const HOST = 'https://product.iamjoney.com/api/v1'
const APIS = {
  GET_Categories: `${HOST}/categories`,
  GET_Posts: `${HOST}/posts`,
}

interface CategoryRequest {
  success:boolean,
  data: Category[]
}

interface PostRequest {
  success:boolean,
  data: {
    posts: Post[],
    pagination:{
      "page": number,
      "limit": number,
      "total": number,
      "pages": number
    }
  }
}

interface QueryPostsOptions {
  category_id?: number;
  page?: number;
  limit?: number;
  id?:string
}

interface RequestConfig {
  HOST: string;
  APIS: Record<string, string>;
}

class Request {
  private HOST: string = '';
  private APIS: Record<string, string> = {};

  constructor(config: RequestConfig) {
    this.HOST = config.HOST;
    this.APIS = config.APIS;
  } 

// 获取分类
  GET_Categories = async (): Promise<CategoryRequest> => {
    try {
      const response = await fetch(this.APIS.GET_Categories);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('GET_Categories error:', error);
      return {
        success: false,
        data: []
      };
    }
  }

  // 获取文章
  GET_Posts = async (options: QueryPostsOptions): Promise<PostRequest> => {
    try {
      const params = new URLSearchParams();
      let id = options.id || '';
      if (options.category_id) {
        params.append('category_id', options.category_id.toString());
      }
    
      params.append('page', options?.page?.toString() || '');
      params.append('limit', options?.limit?.toString() || '');

      let url = ''
      if(id){
        url = `${this.APIS.GET_Posts}/${id}`;
      }
      if (!id) {
        url = `${this.APIS.GET_Posts}?${params.toString()}`;
      }

      console.log('获取文章 ',url)
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('GET_Posts error:', error);
      return {
        success: false,
        data: {
          posts: [],
          pagination: {
            page: options?.page || 1,
            limit: options?.limit || 999,
            total: 0,
            pages: 0
          }
        }
      };
    }
  }
}
export const request = new Request({ HOST, APIS });