import React, { useState, useContext, useEffect } from "react";
import { apiURL } from "../../util/apiURL";
import { AuthContext } from '../../providers/AuthContext';
import { createPost } from "../../util/getRequests";
import { useHistory } from 'react-router-dom';
// import UploadPostImage from "../upload/UploadPostImage";
import { storage } from "../../firebase"

export default function CreatePostForm() {
	const history = useHistory()
	const { currentUser } = useContext(AuthContext);
	let id = currentUser.id
	const [content, setContent] = useState("");
	const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
	const handleUpload = () => {
		const uploadTask = storage.ref(`images/${image.name}`).put(image);
		uploadTask.on(
			"state_changed",
			() => {
				storage
					.ref("images")
					.child(image.name)
					.getDownloadURL()
					.then(url => {
						setUrl(url);
						debugger
					})
			}
		);
	}
	const handleSubmit = async (e) => {
		debugger
		e.preventDefault();

		let dataObj = {
			poster_id: id,
			picture: url,
			content,
		}
		
		try {
			const res = await createPost(dataObj, url);
			setUrl(url)
			//  setUrl(res.config[0])
			console.log(url)
			setContent(res.data)
		} catch (error) {
			console.log(error)
		}
		
	}
	

	return (
		<>
			<h2>This is create Post Form</h2>
			<div className="createPost">
      <input type="file"
        onChange={handleChange} />
      <button onClick={handleUpload}>Upload Image</button>
      <br />
				<form onSubmit={handleSubmit} className="displayComment">
					<input type="text" name="content" value={content} onChange={(e) =>setContent(e.currentTarget.value)} />
				<button type="submit">Create Post</button>
				</form>
			</div>

		
		</>
	);
}
