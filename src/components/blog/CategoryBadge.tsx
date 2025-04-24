
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryBadgeProps {
  category: string;
  className?: string;
}

const CategoryBadge = ({ category, className }: CategoryBadgeProps) => {
  return (
    <Link 
      to={`/category/${category.toLowerCase()}`}
      className={`inline-block px-3 py-1 rounded-full text-xs uppercase tracking-wide font-semibold ${className || 'bg-blog-accent text-white'}`}
    >
      {category}
    </Link>
  );
};

export default CategoryBadge;
