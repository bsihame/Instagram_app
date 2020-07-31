import React, { useState } from "react";
import axios from "axios";
import { apiURL } from "../../util/apiURL";
import ProfilePic from "../upload/ProfilePic";

export default function CreatePostForm() {
	const [body, setBody] = useState("");
	const API = apiURL();
	const handleSubmit = async (e) => {
		e.preventDefault();
		await axios({
			method: "post",
			url: `${API}/api/posts`,
			data: {
				body,
			},
		});
		debugger
		setBody("");
		// updatePosts();
  };
  // const UploadPicture = () {

  // }

	return (
		<>
		<h2>This is create Post Form</h2>
		<form onSubmit={handleSubmit}>
			<textarea value={body} onChange={(e) => setBody(e.target.value)} />
			<button type="submit">Create Post</button>
      </form>
			</>
	);
}
