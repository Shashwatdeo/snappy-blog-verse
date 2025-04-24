
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BlogPost } from '@/types/blog';

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <div className="h-96 md:h-[500px] w-full relative">
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
          <div className="mb-2">
            <Link 
              to={`/category/${post.category.toLowerCase()}`}
              className="text-white bg-blog-accent px-3 py-1 rounded-full text-xs uppercase tracking-wide font-semibold"
            >
              {post.category}
            </Link>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4 font-serif">
            {post.title}
          </h2>
          <p className="text-gray-200 mb-4 md:mb-6 line-clamp-2 md:line-clamp-3 max-w-2xl">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
              <div>
                <p className="text-white font-medium">{post.author.name}</p>
                <p className="text-gray-300 text-sm">
                  {post.publishDate} · {post.readTime} min read
                </p>
              </div>
            </div>
            <Button asChild>
              <Link to={`/post/${post.slug}`}>
                Read Article
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
