import React from 'react';
import './post.css'

// Define the props interface
interface Props {
  imageUrl: string;
  text: string;
  linkUrl: string;
  linkText: string;
}

// Define the Post component
function Post({imageUrl, text, linkUrl, linkText}: Props)  {
  return (
    <div className="post">
      <img src={imageUrl} alt="Post image" className="post-image" />
      <p className="post-text">{text}</p>
      <a href={linkUrl} className="post-link">{linkText}</a>
    </div>
  );
};

export default Post;
