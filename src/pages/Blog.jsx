import React from 'react';
import '../styles/pages/_blog.scss';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'New Album Release: Artist One Drops "Midnight Dreams"',
      date: '2023-06-15',
      excerpt: 'Artist One has released their highly anticipated album "Midnight Dreams" featuring collaborations with...',
      image: 'blog1.jpg'
    },
    // Add more posts
  ];

  return (
    <div className="blog-page">
      <div className="container">
        <h1>News & Blog</h1>
        <p className="subtitle">Stay updated with the latest from Tizzy Camp</p>
        
        <div className="blog-grid">
          {posts.map(post => (
            <div key={post.id} className="blog-post">
              <div className="post-image">
                <img src={`/assets/images/blog/${post.image}`} alt={post.title} />
              </div>
              <div className="post-content">
                <h2>{post.title}</h2>
                <p className="post-date">{new Date(post.date).toLocaleDateString()}</p>
                <p className="post-excerpt">{post.excerpt}</p>
                <button className="read-more">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;