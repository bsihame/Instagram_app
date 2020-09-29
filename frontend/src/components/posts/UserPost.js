// import React, { useState, useEffect, useContext } from "react";
// import CommentsForm from "../comments/CommentsForm";
// import { apiURL } from "../../util/apiURL";
// import { AuthContext } from "../../providers/AuthContext";
// // import { getUserById } from "../../util/getRequests";
// import { getPostByPostId } from "../../util/getRequests";

// export default function UserPost() {
// 	const API = apiURL();
// 	const { currentUser } = useContext(AuthContext);
// 	let { poster_id } = currentUser.id;
// 	const [post, setPost] = useState([]);
// 	console.log(poster_id);
// 	const getUserPost = async () => {
// 		const res = await getPostByPostId(poster_id);
// 		if (res) {
// 			setPost(res.data.payload);
// 		}
// 	};
// 	useEffect(() => {
// 		getUserPost();
// 	}, []);
// 	return (
// 		<div>
// 			<h1>Users Posts</h1>
// 			<div>
// 				{post.map((post) => {
// 					return (
// 						<>
// 							{/* <ul key={post.id}>
// 								<img key={post.id} src={post.picture} alt="user_Post" />
// 								<li key={post.id}>{post.content}</li>
//               </ul> */}

// 							{/* <CommentsForm post_id={post.id}/> */}
// 						</>
// 					);
// 				})}
// 			</div>
// 		</div>
// 	);
// }
