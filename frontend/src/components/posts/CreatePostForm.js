import React, { useState, useContext, useEffect } from "react";
import { apiURL } from "../../util/apiURL";
import { AuthContext } from '../../providers/AuthContext';
import { createPost } from "../../util/getRequests";
import { useHistory } from 'react-router-dom';
// import UploadImage from "../upload/UploadImage";

export default function CreatePostForm() {
	const history = useHistory()
	const { currentUser } = useContext(AuthContext);
	let id = currentUser.id
	const [ content, setContent ] = useState("");
	// const [userPosts, setUserPosts] = useState([]);
	// const [ image, setImage ] = useState(null);
	// const [poster_id, setPosterId] = useState("")

	const handleSubmit = async (e) => {
		e.preventDefault();
		let dataObj = {
			poster_id: id,
			picture: "",
			content,
		}
		
		try {
			const res = await createPost(dataObj);
			setContent(res.data)
		} catch (error) {
			console.log(error)
		}
		
	}
	

	

	return (
		<>
			<h2>This is create Post Form</h2>
			<div className="createPost">
				<form onSubmit={handleSubmit} className="displayComment">
					<input type="text" name="content" value={content} onChange={(e) =>setContent(e.currentTarget.value)} />
				<button type="submit">Create Post</button>
				</form>
				<div className="display">
					{/* {userPosts.map((post) => {
						return (
							<div>
								<h2>{post.content}</h2>
							</div>)
							})} */}
				</div>
			</div>

		
		</>
	);
}
