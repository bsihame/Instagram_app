import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthContext";
import { getUserById } from "../../util/getRequests";
import { createPost } from "../../util/getRequests";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import firebase, { storage } from "../../firebase";
import "../../CSS/CreatePostForm.css";

const useStyles = makeStyles({
	root: {
		// maxWidth: 600,
		maxWidth: 1600,
	},
});

export default function CreatePostForm() {
	const history = useHistory();
	const { currentUser } = useContext(AuthContext);
	let id = currentUser.id;
	const [content, setContent] = useState("");
	const [profilePic, setProfilePic] = useState("");
	const [currentUserName, setCurrentUserName] = useState("");
	const [image, setImage] = useState(null);
	const [url, setUrl] = useState("");

	const classes = useStyles();

	const handleChange = (e) => {
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
		}
	};
	const handleUpload = () => {
		const uploadTask = storage.ref(`images/${image.name}`).put(image);
		uploadTask.on(
			firebase.storage.TaskEvent.STATE_CHANGED,
			(snapshot)=> { },
			(error)=> {console.log(error)},
			() => {
				storage
					.ref("images")
					.child(image.name)
					.getDownloadURL()
					.then((url) => {
						setUrl(url);
					});
			}
		);
	};

	const getUserCall = async () => {
		const data = await getUserById(currentUser.id);
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
	const PLACEHOLDER_IMAGE = "https://tridevcampus.edu.np/img/no-image-2.png"
	return (
		<div className="postFormDiv">
			<Card className={classes.root}>
				<CardActionArea className="card_area">
					{/* <h2 className="postTittle">Create a Post</h2> */}
					<img className="profilePic" src={profilePic} alt="profile_picture" />
					<h4 className="userNamePost">{currentUserName}</h4>
					<div className="createPost">
						<div className="uploadDiv">
							<input
								className="inputPost"
								type="file"
								onChange={handleChange}
							/>
							<button className="buttonUploadPost" onClick={handleUpload}>
								Upload Image
							</button>
							</div>
							<div>
								{url? (
									<div>
										<b>Preview: </b>
										<img src={url} alt="Image_Preview" />
									</div>
								) : null}
							</div>
							
							{/* <div>
									<b>Preview: </b>
								{url?<div>
									<img 
									src={url || PLACEHOLDER_IMAGE} 
									alt="Image_Preview" 
									/>
									</div>:null
								}
							</div> */}
							{/* </div> */}

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
				</CardActionArea>
			</Card>
		</div>
	);
}
