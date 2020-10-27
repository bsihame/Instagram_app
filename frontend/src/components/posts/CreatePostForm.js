import React, { useState, useContext, useEffect } from "react";
import { apiURL } from "../../util/apiURL";
import { AuthContext } from "../../providers/AuthContext";
import { getUserById } from "../../util/getRequests";
import { createPost } from "../../util/getRequests";
import { useHistory } from "react-router-dom";
import { storage } from "../../firebase";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/icons";

import "../../CSS/CreatePostForm.css";

export default function CreatePostForm() {
	const history = useHistory();
	const { currentUser } = useContext(AuthContext);
	let id = currentUser.id;
	const [content, setContent] = useState("");
	const [profilePic, setProfilePic] = useState("");
	const [currentUserName, setCurrentUserName] = useState("");
	const [image, setImage] = useState(null);
	const [imagePreview, setImagePreview] = useState(null);
	const [ change, setChange] = useState(true)
	const [url, setUrl] = useState("");

	const handleChange = (e) => {
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
			setChange(true)
		}
	};
	const handleUpload = () => {
		const uploadTask = storage.ref(`images/${image.name}`).put(image);
		uploadTask.on("state_changed", () => {
			storage
				.ref("images")
				.child(image.name)
				.getDownloadURL()
				.then((url) => {
					setUrl(url);
				});
		});
	};

	const getUserCall = async () => {
		const data = await getUserById(currentUser.id);
		debugger;

		setCurrentUserName(data.username);
		setProfilePic(data.profile_pic);
		setCurrentUserName(data.username);
	};

	const returnToUserPage = () => {
		let username = currentUserName;
		history.push(`/${username}`);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();

		let dataObj = {
			poster_id: id,
			picture: url,
			content,
		};

		try {
			const res = await createPost(dataObj);
			setUrl(url);
			returnToUserPage();
		} catch (error) {
			console.log(error);
		}
	};
	

	useEffect(() => {
		if (currentUser) {
			getUserCall();
		}
	}, []);

	return (
		<div className="postFormDiv">
			<h2 className="postTittle">Create a Post</h2>
			<img className="profilePic" src={profilePic} alt="profile_picture" />
			<h4 className="userName">{currentUserName}</h4>
			<div className="createPost">
				<div className="uploadDiv">
					<input className="inputPost" type="file" onChange={handleChange} />
					<button className="buttonPost" onClick={handleUpload}>
						Upload Image
					</button>
					<div>
						{change ? (
							<div>
								<b>Preview: </b>
								<img src={url} alt="Image_Preview" />
							</div>
						) : null}
						{/* <b>Preview: </b>
						<img src={url} alt="post_image" /> */}
					</div>
				</div>
				<div className="form">
					<form onSubmit={handleSubmit} className="displayComment">
						<input
							className="inputPost textPost"
							type="text"
							name="content"
							value={content}
							onChange={(e) => setContent(e.currentTarget.value)}
						/>

						<button className="buttonPost" type="submit">
							Create Post
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
