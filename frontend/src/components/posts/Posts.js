// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import PostsIndex from "./PostsIndex";
// import CreatePostForm from "./CreatePostForm";
// import { apiURL } from "../../util/apiURL";
// import {AuthContext} from "../../providers/AuthContext"

// // import { getFirebaseIdToken } from "../../util/firebaseFunctions"
// // import token from "../../providers/AuthContext"

// export default function Posts() {
// 	const [currentUser, token] = useState(AuthContext);
// 	const [posts, setPosts] = useState([]);
// 	const [error, setError] = useState(null);
	
// 	const API = apiURL();
// 	console.log(API);

// 	useEffect(() => {
// 		const allPost = async () => {
// 			debugger
// 			let res = await axios({
// 				method: "get",
// 				url: `${API}/posts`,
// 				headers: {
// 					"AuthToken": token
// 				}
// 			})

// 			setPosts(res.data.payload);
// 			console.log(res.data)
// 		}
// 		allPost();
// 		// const userId = loggedUser.uid || "0";
// 		// axios({
// 		// 	method: "get",
// 		// 	url: `${API}/api/posts`,
// 		// })
// 		// 	.then((res) => {
// 		// 		console.log(1000, res.data.payload);
// 		// 		setPosts(res.data.payload);
// 		// 		setError(null);
// 		// 	})
// 		// 	.catch((err) => {
// 		// 		console.log(2222);
// 		// 		setError(err.message);
// 		// 		setPosts([]);
// 		// 	});
// 	}, [API])
	
// 	const displayPosts = posts.map((post) => {
// 		return (
// 			<div>
// 				<PostsIndex username={post.username}/>
// 			</div>
// 		)
// 	})

// 	return (
// 		<main>
// 			{error ? <div>{error}</div> : null}
// 			{/* <CreatePostForm updatePosts={updatePosts} /> */}
// 			{/* <CreatePostForm />
// 			<PostsIndex username={post.username}  /> */}
			
// 			<div>
// 				{displayPosts}
// 			</div>
// 		</main>
// 	);
// }
