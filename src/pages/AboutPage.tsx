
import React from 'react';
import Layout from '../components/layout/Layout';
import { authors } from '../data/blogData';
import AuthorCard from '../components/blog/AuthorCard';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">About BlogVerse</h1>
          <div className="w-24 h-1 bg-blog-accent mx-auto mb-8"></div>
          <p className="text-xl text-blog-secondary max-w-2xl mx-auto">
            A modern platform dedicated to sharing knowledge, stories, and insights across various topics.
          </p>
        </header>
        
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 font-serif">Our Mission</h2>
          <p className="text-lg mb-4">
            At BlogVerse, we believe in the power of words to inform, inspire, and connect. Our mission is to create a space where readers can find thoughtfully crafted content that adds value to their lives.
          </p>
          <p className="text-lg mb-4">
            We cover a wide range of topics including technology, lifestyle, travel, and business, bringing you the latest trends, in-depth analyses, and practical advice from experts in their fields.
          </p>
          <p className="text-lg">
            Whether you're looking to stay informed about the latest technological advancements, discover new travel destinations, improve your productivity, or simply find engaging stories, BlogVerse is your trusted companion in this journey of discovery and growth.
          </p>
        </section>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center font-serif">Meet Our Authors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authors.map((author) => (
              <AuthorCard key={author.id} author={author} />
            ))}
          </div>
        </section>
        
        <section className="bg-blog-muted p-8 rounded-lg max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 font-serif">Contact Us</h2>
          <p className="mb-6">
            Have questions, feedback, or want to work with us? We'd love to hear from you.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blog-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blog-accent"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blog-accent"
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Message</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blog-accent"
                placeholder="Your message"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-blog-accent hover:bg-blue-600 text-white px-6 py-2 rounded transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
