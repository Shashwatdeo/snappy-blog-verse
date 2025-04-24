
import React from 'react';
import { Link } from 'react-router-dom';
import { Author } from '@/types/blog';

interface AuthorCardProps {
  author: Author;
}

const AuthorCard = ({ author }: AuthorCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 bg-blog-muted rounded-lg">
      <img 
        src={author.avatar} 
        alt={author.name} 
        className="w-24 h-24 rounded-full object-cover"
      />
      <div>
        <h3 className="text-xl font-bold mb-2">{author.name}</h3>
        <p className="text-blog-secondary mb-3">{author.bio}</p>
        <div className="flex gap-2">
          {author.socialLinks?.map((social, index) => (
            <a 
              key={index}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blog-accent hover:text-blog-primary transition-colors"
            >
              {social.platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
