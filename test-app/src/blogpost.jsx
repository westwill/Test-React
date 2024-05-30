import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { BlogPostsArray } from './blogposts';

const Blogpost = () => {
  const Dynamiclink = useParams();
  console.log('dynamiclin here =>', Dynamiclink);
  console.log('my location  here =>', location.pathname);

  const Thepost = BlogPostsArray.filter((post) => post.id === Dynamiclink.post);
  console.log('the single post =>', Thepost);

  return (
    <div>
      <h4 className='text-red-500 bg'>{Thepost[0].title}</h4>
      <p>{Thepost[0].postContent}</p>
    </div>
  );
};

export default Blogpost;
