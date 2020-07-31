import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import PostsIndex from "./PostsIndex";
import CreatePostForm from "./CreatePostForm";
import { apiURL } from "../../util/apiURL";
import { getUsersPosts } from "../../util/getRequests";
// import {AuthContext} from "../../providers/AuthContext"

// import { getFirebaseIdToken } from "../../util/firebaseFunctions"
// import token from "../../providers/AuthContext"

export default function Posts() {
	// const [currentUser, token] = useState(AuthContext);
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState(null);
	
	const API = apiURL();
	const getPosts = async () => {
		try {
			let res = await getUsersPosts()
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
			<CreatePostForm updatePosts={getPosts} />
			<PostsIndex posts={posts} />
		</div>
	)
}
