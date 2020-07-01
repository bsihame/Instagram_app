import React, { useState, useEffect } from 'react';
import axios from "axios";
import PostsIndex from './PostsIndex';
import CreatePostForm from './CreatePostForm';
import { apiURL } from "../../util/apiURL";

export default function Posts() {
  const [Posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  // const API = apiURL();
  useEffect(() => {
    const API = apiURL();

    const fetchPosts = async () => {
      try {
          let res = await axios({
            method: "get",
            url: `${API}/api/Posts/`,
          });
        debugger

        console.log(res)
  
          setPosts(res.data.Posts);
          setError(null);
      } catch (err) {
          setError(err.message)
          setPosts([]);
      }
  };
    fetchPosts();
    
  }, []); 
  return (
    <main>
        {error ? <div>{error}</div> : null}
      {/* <CreatePostForm updatePosts={fetchPosts} /> */}
      <PostsIndex Posts={Posts} />
    </main>
  );
};
