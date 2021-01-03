import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthContext";
import { getUserById, updateUser } from "../../util/getRequests";
import { storage } from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import "../../CSS/UserPageEdit.css";

const useStyles = makeStyles({
	root: {
		maxWidth: 600,
	},
});

export default function UserPageEdit(username) {
	const history = useHistory();
	const { currentUser, token } = useContext(AuthContext);
	const [user, setUser] = useState({});
	const [profilePicture, setProfilePicture] = useState(null);
	const [currentFullName, setCurrentFullName] = useState("");
	const [currentUserName, setCurrentUserName] = useState("");
	const [currentBio, setCurrentBio] = useState("");
	const [url, setUrl] = useState("");

	const classes = useStyles();

	const getUserCall = async () => {
		const data = await getUserById(currentUser.id);
		debugger;
		setProfilePicture(data.profile_pic);
		setCurrentFullName(data.full_name);
		setCurrentUserName(data.username);
		setCurrentBio(data.bio);
		setUser(data);
	};

	const updateUserCall = async () => {
		const userData = {
			profile_pic: url,
			full_name: currentFullName,
			username: currentUserName,
			bio: currentBio,
		};

		const response = await updateUser(currentUser.id, userData, token);
		returnToProfile(response.username);
	};

	const handleUpload = (image) => {
		const uploadTask = storage.ref(`images/${image.name}`).put(image);
		uploadTask.on("state_changed", () => {
			storage
				.ref("images")
				.child(image.name)
				.getDownloadURL()
				.then((url) => {
					console.log(url);
					setUrl(url);
				});
		});
	};

	const returnToProfile = (username) => {
		if (username) {
			console.log("returnToProfile", username);
			history.push(`/${username}/profile`);
		}
	};

	useEffect(() => {
		if (currentUser) {
			getUserCall();
		}
	}, []);

	const handleChange = (e) => {
		if (e.target.name === "fullName") {
			setCurrentFullName(e.target.value);
		}
		if (e.target.name === "username") {
			setCurrentUserName(e.target.value);
		}
		if (e.target.name === "bio") {
			setCurrentBio(e.target.value);
		}
		if (e.target.name === "picture") {
			const test = handleUpload(e.target.files[0]);
			setProfilePicture(URL.createObjectURL(e.target.files[0]));
		}
	};

	return (
		<div className="up-edit">
			<Card className={classes.root}>
				<CardActionArea className="card_area">
					<h2 className="edit_title">Edit Your Profile</h2>

					<h4>Preview: </h4>
					<img
						className="profile_picture"
						src={profilePicture}
						alt="profile_picture"
					/>

					<div className="editContainer">
						<label>
							<h4>Profile Picture: </h4>
							<input
								type="file"
								onChange={handleChange}
								name="picture"
								className="Picture_input"
							/>
						</label>
						<div className="text_field">
							<TextField
								id="outlined-basic"
								label="Full_Name"
								variant="outlined"
								type="text"
								value={currentFullName}
								onChange={handleChange}
								name="fullName"
							/>
						</div>

						<div className="text_field">
							<TextField
								id="outlined-basic"
								label="User_Name"
								variant="outlined"
								type="text"
								value={currentUserName}
								onChange={handleChange}
								name="username"
							/>
						</div>

						<div className="text_field">
							<TextField
								id="outlined-basic"
								label="Bio"
								variant="outlined"
								rows="7"
								cols="40"
								value={currentBio}
								onChange={handleChange}
								name="bio"
							/>
						</div>

						<div className="edit_button">
							<button
								type="submit"
								onClick={updateUserCall}
								className="edit_submit_button"
							>
								Update
							</button>
						</div>
					</div>
				</CardActionArea>
			</Card>
		</div>
	);
}
