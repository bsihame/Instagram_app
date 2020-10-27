import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthContext";
import { getUserById, updateUser } from "../../util/getRequests";
import { useInput } from "../../util/customHooks";
import { storage } from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
	uploadPicture,
	getFirebaseIdToken,
} from "../../util/firebaseFunctions";
import { useHistory } from "react-router-dom";
import "../../CSS/UserPageEdit.css";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
}));

export default function UserPageEdit(username) {
	const history = useHistory();
	const { currentUser, token } = useContext(AuthContext);
	const [user, setUser] = useState({});
	const [profilePicture, setProfilePicture] = useState(null);
	const [imagePreview, setImagePreview] = useState(null);
	const [currentFullName, setCurrentFullName] = useState("");
	const [currentUserName, setCurrentUserName] = useState("");
	const [currentBio, setCurrentBio] = useState("");
	const [url, setUrl] = useState("");
	let id = currentUser.id;

	
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
		debugger;
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
	// const returnToProfile = () => {
		
	// 	 let username = currentUserName
	// 	console.log(username);
	

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
			<h2>Edit Your Profile</h2>
			<div>
				<h4>Preview: </h4>
				<img
					className="profile_picture"
					src={profilePicture}
					alt="profile_picture"
				/>
				{/* </div> */}
				<div className="editContainer">
					{/* <TextField
						id="outlined-helperText"
						label="Profile_Picture"
						// defaultValue="profile"
						type="file"
						onChange={handleChange}
						name="picture"
						// helperText="Some important text"
						variant="outlined"
					/> */}

					{/* <TextField
						id="outlined-helperText"
						label="Profile_Picture"
						variant="outlined"
						type="file"
						onChange={handleChange}
						name="picture"
					/> */}
					<label>
						<h4>Profile Picture: </h4>
						<input type="file" onChange={handleChange} name="picture" />
					</label>
					<TextField
						id="outlined-basic"
						label="Full_Name"
						variant="outlined"
						type="text"
						value={currentFullName}
						onChange={handleChange}
						name="fullName"
					/>
					{/* <div className="upe-userInteraction"> */}
					{/* <label>
						<span>Full Name: </span>
						<input
							type="text"
							value={currentFullName}
							onChange={handleChange}
							name="fullName"
						/>
					</label> */}
					{/* </div> */}
					{/* <div className="upe-userInteraction"> */}

					<TextField
						id="outlined-basic"
						label="User_Name"
						variant="outlined"
						type="text"
						value={currentUserName}
						onChange={handleChange}
						name="username"
					/>
					{/* <label>
						<span>User Name:</span>
						<input
							type="text"
							value={currentUserName}
							onChange={handleChange}
							name="username"
						/>
					</label> */}
					{/* </div> */}
					{/* </div> */}

					{/* <div> */}

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

					{/* <label>Bio: </label>
					<textarea
						rows="7"
						cols="40"
						value={currentBio}
						onChange={handleChange}
						name="bio"
					/> */}
				</div>
				<div>
					<button type="submit" onClick={updateUserCall}>
						Update
					</button>
				</div>
			</div>
			{/* </div> */}
		</div>
	);
}
