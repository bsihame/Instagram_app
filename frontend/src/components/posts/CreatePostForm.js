import React, { useState, useContext } from "react";
import axios from "axios";
import { apiURL } from "../../util/apiURL";
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthContext';
import { useInput } from "../../util/customHooks"

// import ProfilePic from "../upload/UploadImage";
import { createPost } from "../../util/getRequests";
import UploadImage from "../upload/UploadImage";

export default function CreatePostForm() {
	const poster_id = useInput("")
	const picture = useInput("");
	const content = useInput("")
	const API = apiURL();
	const history = useHistory()
	const handleSubmit = async (e) => {
		const { currentUser } = currentUser.id
		// context(AuthContext);
		// currentUser = poster_id
		console.log(currentUser)
		
		e.preventDefault();
		await createPost();
		history.push("/posts")
		debugger
		// await axios({
		// 	method: "post",
		// 	url: `${API}/api/posts`,
		// 	data: {
		// 		body,
		// 		// Poster_id,
		// 		// picture,
		// 		// content,
		// 	},
		// });
		// debugger
		// setBody("");
	
  };
  
	return (
		<>
		<h2>This is create Post Form</h2>
		<form onSubmit={handleSubmit}>
				<textarea value={content.value} onChange={(e) => content(e.target.value)} />
				<UploadImage value={picture}/>
			<button type="submit">Create Post</button>
      </form>
			</>
	);
}
