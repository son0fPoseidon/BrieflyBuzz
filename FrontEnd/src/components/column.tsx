import React, { useState, useEffect } from 'react';
import Post from './post';
import './column.css'

function Column() {
  // Initial post data for demonstration
  const initialPostData = {
    imageUrl: "https://via.placeholder.com/150",
    text: "This is an example post. It contains 4-5 sentences of text describing the content of the post. This can be news, updates, or any information you'd like to share.",
    linkUrl: "https://example.com",
    linkText: "Read More",
  };

  // Create an array with multiple posts to start with
  const initialPosts = Array(5).fill(initialPostData); // Start with 5 posts

  // State to store the list of posts
  const [posts, setPosts] = useState(initialPosts);

  // Function to add a new post
  const addPost = () => {
    setPosts(currentPosts => [...currentPosts, initialPostData]);
  };

  // useEffect hook for infinite scrolling
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled to near the bottom of the page
      const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
      if (bottom) {
        addPost(); // Add a new post when the bottom is reached
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="postsContainer">
      {posts.map((post, index) => (
        <Post 
          key={index}
          imageUrl={post.imageUrl}
          text={post.text}
          linkUrl={post.linkUrl}
          linkText={post.linkText}
        />
      ))}
    </div>
  );
}

export default Column;
