
import React from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const SubscribePage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Subscribe to BlogVerse</h1>
            <p className="text-xl text-blog-secondary">
              Get the latest articles delivered straight to your inbox. No spam, ever.
            </p>
          </header>
          
          <Card className="p-8 mb-16">
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blog-accent"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Name (Optional)</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blog-accent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Interests</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Technology', 'Lifestyle', 'Travel', 'Business', 'Health', 'Culture'].map((category) => (
                    <label key={category} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-blog-accent focus:ring-blog-accent" />
                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="frequency" className="block mb-2 font-medium">Email Frequency</label>
                <select 
                  id="frequency" 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blog-accent"
                >
                  <option value="daily">Daily Digest</option>
                  <option value="weekly" selected>Weekly Roundup</option>
                  <option value="monthly">Monthly Newsletter</option>
                </select>
              </div>
              
              <Button className="w-full py-6 text-lg">
                Subscribe Now
              </Button>
              
              <p className="text-sm text-blog-secondary text-center">
                By subscribing, you agree to our <a href="/privacy" className="underline hover:text-blog-accent">Privacy Policy</a> and <a href="/terms" className="underline hover:text-blog-accent">Terms of Service</a>.
              </p>
            </form>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blog-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 font-serif">Why Subscribe?</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blog-accent mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Exclusive content not published on the blog</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blog-accent mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Early access to new features and content</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blog-accent mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Curated content based on your interests</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blog-accent mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No ads or sponsored content in newsletters</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blog-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 font-serif">From Our Subscribers</h3>
              <blockquote className="italic text-blog-secondary mb-4">
                "The weekly roundup saves me so much time. I get all the best content in one place, curated just for me."
              </blockquote>
              <p className="font-medium">— Sarah K., Weekly Subscriber</p>
              
              <hr className="my-4 border-gray-300" />
              
              <blockquote className="italic text-blog-secondary mb-4">
                "I've discovered so many useful resources through the newsletter that I would have missed otherwise."
              </blockquote>
              <p className="font-medium">— Michael T., Monthly Subscriber</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SubscribePage;
