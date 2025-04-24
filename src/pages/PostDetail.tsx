
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getPostBySlug } from '../data/blogData';
import Layout from '../components/layout/Layout';
import AuthorCard from '../components/blog/AuthorCard';
import CategoryBadge from '../components/blog/CategoryBadge';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const PostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  
  useEffect(() => {
    // Scroll to top when post loads
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/not-found" />;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Post Header */}
        <header className="max-w-4xl mx-auto mb-8">
          <CategoryBadge category={post.category} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 font-serif">
            {post.title}
          </h1>
          <div className="flex items-center">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-blog-secondary text-sm">
                {post.publishDate} · {post.readTime} min read
              </p>
            </div>
          </div>
        </header>
        
        {/* Featured Image */}
        <div className="mb-10">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full max-w-5xl mx-auto h-auto object-cover rounded-lg"
          />
        </div>
        
        {/* Post Content */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="blog-content prose prose-lg max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
        
        {/* Tags */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <Link
                key={index}
                to={`/tag/${tag.toLowerCase()}`}
                className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Author Bio */}
        <div className="max-w-3xl mx-auto mb-10">
          <AuthorCard author={post.author} />
        </div>
        
        {/* Navigation */}
        <div className="max-w-3xl mx-auto flex justify-between">
          <Button variant="outline" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/blog" className="flex items-center gap-2">
              More Articles
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetail;
