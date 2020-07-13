import React, { useState, useEffect } from "react";
import axios from "axios";
import PostsIndex from "./PostsIndex";
import CreatePostForm from "./CreatePostForm";
import { apiURL } from "../../util/apiURL";

export default function Posts({ loggedUser }) {
	const [Posts, setPosts] = useState([]);
	const [error, setError] = useState(null);

	const API = apiURL();
	console.log(API);

	useEffect(() => {
		const userId = loggedUser.uid || "0";
		axios({
			method: "get",
			url: `${API}/api/posts/${userId}`,
		})
			.then((res) => {
				console.log(1000, res.data.payload);
				setPosts(res.data.payload);
				setError(null);
			})
			.catch((err) => {
				console.log(2222);
				setError(err.message);
				setPosts([]);
			});
	}, [API, loggedUser.uid]);

	return (
		<main>
			{error ? <div>{error}</div> : null}
			{/* <CreatePostForm updatePosts={fetchPosts} /> */}
			<PostsIndex posts={Posts} />
			<div></div>
		</main>
	);
}
