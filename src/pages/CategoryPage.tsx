
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import PostCard from '../components/blog/PostCard';
import { getPostsByCategory, getCategories } from '../data/blogData';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const validCategories = getCategories().map(cat => cat.toLowerCase());
  
  if (!category || !validCategories.includes(category.toLowerCase())) {
    return <Navigate to="/not-found" />;
  }
  
  const posts = getPostsByCategory(category);
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            {formattedCategory}
          </h1>
          <p className="text-xl text-blog-secondary max-w-2xl mx-auto">
            Explore our collection of articles about {formattedCategory.toLowerCase()}.
          </p>
        </header>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-blog-secondary">
              No articles found in this category.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
