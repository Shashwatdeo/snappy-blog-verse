
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '@/types/blog';

interface PostCardProps {
  post: BlogPost;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className="overflow-hidden transition-shadow duration-300 hover:shadow-lg rounded-lg border border-gray-200">
      <Link to={`/post/${post.slug}`} className="block">
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-5">
        <div className="mb-2">
          <Link 
            to={`/category/${post.category.toLowerCase()}`}
            className="text-xs text-blog-accent font-semibold uppercase tracking-wide"
          >
            {post.category}
          </Link>
        </div>
        <Link to={`/post/${post.slug}`} className="block">
          <h3 className="text-xl font-bold mb-2 text-blog-primary hover:text-blog-accent transition-colors font-serif">
            {post.title}
          </h3>
        </Link>
        <p className="text-blog-secondary mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center">
          <img 
            src={post.author.avatar} 
            alt={post.author.name} 
            className="w-8 h-8 rounded-full mr-2 object-cover"
          />
          <div>
            <p className="text-sm font-medium">{post.author.name}</p>
            <p className="text-xs text-blog-secondary">
              {post.publishDate} · {post.readTime} min read
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
