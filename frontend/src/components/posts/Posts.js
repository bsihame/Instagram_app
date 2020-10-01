import React, { useState, useEffect } from "react";

import PostsIndex from "./PostsIndex";
import { apiURL } from "../../util/apiURL";
import { getUsersPosts } from "../../util/getRequests";

export default function Posts() {
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState(null);
	const [ comment, setComment ] = useState("")
	const getPosts = async () => {
		try {
			let res = await getUsersPosts()
		// console.log(res)
			setPosts(res);
			setError(null)
		} catch (error) {
			console.log(error)
			setError(error.message)
			setPosts([])
		 }
	}
	useEffect(() => {
		getPosts();
		return () => {
		}
	}, []);
	return (
		<div>
			{error ? <div>{error}</div> : null}
			<PostsIndex posts={posts} />
		</div>
	)
}