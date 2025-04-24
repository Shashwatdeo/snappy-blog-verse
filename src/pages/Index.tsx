
import React from 'react';
import Layout from '../components/layout/Layout';
import FeaturedPost from '../components/blog/FeaturedPost';
import PostCard from '../components/blog/PostCard';
import { getFeaturedPost, getRecentPosts } from '../data/blogData';

const Index = () => {
  const featuredPost = getFeaturedPost();
  const recentPosts = getRecentPosts(6).filter(post => post.id !== featuredPost.id);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 font-serif">
            BlogVerse
          </h1>
          <p className="text-xl text-center text-blog-secondary max-w-2xl mx-auto">
            Explore insightful articles on technology, lifestyle, travel, and more.
          </p>
        </section>

        {/* Featured Post */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-serif">Featured Article</h2>
          <FeaturedPost post={featuredPost} />
        </section>

        {/* Recent Posts */}
        <section>
          <div className="flex justify-between items-baseline mb-6">
            <h2 className="text-2xl font-bold font-serif">Recent Articles</h2>
            <a href="/blog" className="text-blog-accent hover:underline">
              View all
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
