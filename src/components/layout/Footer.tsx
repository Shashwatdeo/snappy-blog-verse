
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blog-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BlogVerse</h3>
            <p className="text-gray-300 mb-4">
              A modern platform for thoughts, stories, and ideas.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/category/technology" className="text-gray-300 hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/category/lifestyle" className="text-gray-300 hover:text-white transition-colors">
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link to="/category/travel" className="text-gray-300 hover:text-white transition-colors">
                  Travel
                </Link>
              </li>
              <li>
                <Link to="/category/business" className="text-gray-300 hover:text-white transition-colors">
                  Business
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <p className="text-gray-300 mb-4">
              Join our newsletter to get the latest articles.
            </p>
            <form className="flex flex-col md:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded text-blog-primary focus:outline-none focus:ring-2 focus:ring-blog-accent"
                required
              />
              <button 
                type="submit"
                className="bg-blog-accent hover:bg-blue-600 transition-colors text-white px-4 py-2 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-300">
          <p>© {new Date().getFullYear()} BlogVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
