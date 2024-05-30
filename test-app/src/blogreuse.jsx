import React from 'react';
import { BlogPostsArray } from './blogposts';
import { Link } from 'react-router-dom';

const Blogreuse = () => {
  console.log(BlogPostsArray);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-4 '>
      {BlogPostsArray?.map((post) => {
        return <Link to={`/blog/${post.id}`} key={post.id} className='border rounded-md p-3'>
          <h4 className='text-red-500 bg'>{post.title}</h4>
          <p>{post.postContent}</p>
        </Link>;
      })}
    </div>
  );
};

export default Blogreuse;
