import React, { useState, useEffect } from "react";
import axios from "axios";
import PostsIndex from "./PostsIndex";
import CreatePostForm from "./CreatePostForm";
import { apiURL } from "../../util/apiURL";

export default function Posts() {
	const [Posts, setPosts] = useState([]);
	const [error, setError] = useState(null);

	const API = apiURL();
	console.log(API);

  useEffect(() => {
    try{
		axios({
				method: "get",
				url: `${API}/api/posts/`,
			})
			.then((res) => {
        // console.log(res.data.payload);
				setPosts(res.data.payload);
			});

		setError(null);
		} catch (err) {
		    setError(err.message)
		    setPosts([]);
		}
	}, [API]);

	return (
		<main>
			{error ? <div>{error}</div> : null}
			{/* <CreatePostForm updatePosts={fetchPosts} /> */}
      <PostsIndex posts={Posts} />
      <div>
      
      </div>
		</main>
	);
}
