import React, { useState, useEffect } from "react";
import PostsIndex from "./PostsIndex";
import { getUsersPosts } from "../../util/getRequests";
import "../../CSS/Posts.css";

export default function Posts() {
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState(null);

	const getPosts = async () => {
		try {
			let res = await getUsersPosts();
			setPosts(res);
			setError(null);
		} catch (error) {
			console.log(error);
			setError(error.message);
			setPosts([]);
		}
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<div className="posts">
			{error ? <div>{error}</div> : null}
			<PostsIndex posts={posts} />
		</div>
	);
}
