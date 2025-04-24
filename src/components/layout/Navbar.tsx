
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blog-primary">
          BlogVerse
        </Link>
        
        {/* Mobile Menu Button */}
        <Button 
          onClick={toggleMenu} 
          variant="ghost" 
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-blog-primary hover:text-blog-accent transition-colors">
            Home
          </Link>
          <Link to="/category/technology" className="text-blog-primary hover:text-blog-accent transition-colors">
            Technology
          </Link>
          <Link to="/category/lifestyle" className="text-blog-primary hover:text-blog-accent transition-colors">
            Lifestyle
          </Link>
          <Link to="/category/travel" className="text-blog-primary hover:text-blog-accent transition-colors">
            Travel
          </Link>
          <Link to="/about" className="text-blog-primary hover:text-blog-accent transition-colors">
            About
          </Link>
          <Button asChild>
            <Link to="/subscribe">Subscribe</Link>
          </Button>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-md">
          <nav className="flex flex-col space-y-3">
            <Link 
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-blog-primary hover:text-blog-accent transition-colors py-2"
            >
              Home
            </Link>
            <Link 
              to="/category/technology"
              onClick={() => setIsMenuOpen(false)}
              className="text-blog-primary hover:text-blog-accent transition-colors py-2"
            >
              Technology
            </Link>
            <Link 
              to="/category/lifestyle"
              onClick={() => setIsMenuOpen(false)}
              className="text-blog-primary hover:text-blog-accent transition-colors py-2"
            >
              Lifestyle
            </Link>
            <Link 
              to="/category/travel"
              onClick={() => setIsMenuOpen(false)}
              className="text-blog-primary hover:text-blog-accent transition-colors py-2"
            >
              Travel
            </Link>
            <Link 
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-blog-primary hover:text-blog-accent transition-colors py-2"
            >
              About
            </Link>
            <Button asChild className="w-full">
              <Link to="/subscribe">Subscribe</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
