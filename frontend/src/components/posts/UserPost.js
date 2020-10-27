import React, { useState, useEffect, useContext } from "react";
import CommentsForm from "../comments/CommentsForm";
import { apiURL } from "../../util/apiURL";
import { AuthContext } from "../../providers/AuthContext";
// import { getUserById } from "../../util/getRequests";
import {
	getPostByPostId,
	getUserById,
	getUsersPosts,

} from "../../util/getRequests";
import { getFirebaseIdToken, uploadPicture } from "../../util/firebaseFunctions";
import { useHistory } from "react-router-dom";
// import  getFirebaseIdToken from "../../util/firebaseFunctions";

//   const { currentUser, token } = useContext(AuthContext);

// let poster_id = currentUser.id;
// console.log(poster_id);

export default function UserPost() {
	const history = useHistory();
	const { currentUser, token } = useContext(AuthContext);
	const [post, setPost] = useState([]);
	const [error, setError] = useState(null);
	// const [content, setContent] = useState("");
	// const [image, setImage] = useState(null);
	// const [url, setUrl] = useState([]);
	// const [data, setData] = useState([])
	let poster_id = currentUser.id
	console.log(poster_id)


	
	const getUserPost = async () => {

    const res = await getPostByPostId(poster_id, token);

		setPost(res)
		try {
			if (res) {
		
        setPost(res);
        setError(null)
      }
    } catch (error) {
      console.log(error)
      setError(error.message);
			setPost([]);
    }
};
	
	useEffect(() => {
		getUserPost(); 
	}, []);
	if (!post.length) {
		return <h4>loading</h4>
	}
	return (
		<div>
			<h1>User Posts</h1>
			<div>
				<img src={post[0].profile_pic} alt="user_profile" />
				<h4>{post[0].username}</h4>
				<h4>{post[0].bio}</h4>
			</div>
			<div>
				{post.map((post) => {
					return (
						<>
							<ul key={post.id}>
								<img src={post.picture} alt="user_Post" />
								<li>{post.content}</li>
								<li>{new Date(post.created_at).toLocaleString()}</li>
							</ul>

							{/* <CommentsForm post_id={post.id}/> */}
						</>
					);
				})}
			</div>
		</div>
	);
}
