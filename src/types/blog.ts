
export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  socialLinks?: {
    platform: string;
    url: string;
  }[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  publishDate: string;
  readTime: number;
  author: Author;
}
