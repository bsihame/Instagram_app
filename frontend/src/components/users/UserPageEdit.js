import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthContext";
import { getUserById, updateUser } from "../../util/getRequests";
import { useInput } from "../../util/customHooks";
import { storage } from "../../firebase";
import {
	uploadPicture,
	getFirebaseIdToken,
} from "../../util/firebaseFunctions";
import { useHistory } from "react-router-dom";
import "../../CSS/UserPageEdit.css";

export default function UserPageEdit(firstName) {
	const history = useHistory();
	const { currentUser, token } = useContext(AuthContext);

	console.log(currentUser);
	const [user, setUser] = useState({});
	const [profilePicture, setProfilePicture] = useState(null);
	const [imagePreview, setImagePreview] = useState(null);
	const [currentFullName, setCurrentFullName] = useState("");
	const [currentUserName, setCurrentUserName] = useState("");
	const [currentBio, setCurrentBio] = useState("");
	const [url, setUrl] = useState("");
	let id = currentUser.id;

	const getUserCall = async () => {
		const data = await getUserById(currentUser.id);
		debugger;
		setProfilePicture(data.profile_pic)
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
		returnToProfile();

	};
	const handleUpload = (image) => {
		const uploadTask = storage.ref(`images/${image.name}`).put(image);
		uploadTask.on("state_changed", () => {
			storage
				.ref("images")
				.child(image.name)
				.getDownloadURL()
				.then((url) => {
					console.log(url)
					setUrl(url);
				});
		});
	};

	
	// const displayPreviewPicture = profilePicture ? (
	// 	<img src={profilePicture} alt="new_profile_picture" />
	// ) : null;

	// const handleFileSelect = (e) => {
	// 	setProfilePicture(e.target.files[0]);
	// 	setImagePreview(URL.createObjectURL(e.target.files[0]));
	// };

	const returnToProfile = () => {
		history.push(`/user/${currentUser.id}`);
	};

	useEffect(() => {
		getUserCall();
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
			console.log(100, test)
			
			setProfilePicture(URL.createObjectURL(e.target.files[0]));

			// console.log(URL.createObjectURL(e.target.files[0]) + "text");
		}
	 };
	return (
		<div className="up-edit">
			<div className="editContainer">
				<label>
					<span>Profile Picture: </span>
					<input
						type="file"
						onChange={handleChange} 
						name="picture"
					/>
				</label>
				<div>
					<b>Preview: </b>
					<img src={profilePicture} alt="profile_picture" />
				</div>

				<div className="upe-userInteraction">
					<label>
						<span>Full Name: </span>
						<input
							type="text"
							value={currentFullName}
							onChange={handleChange}
							name="fullName"
						/>
					</label>
				</div>
				<div className="upe-userInteraction">
					<label>
						<span>User Name:</span>
						<input
							type="text"
							value={currentUserName}
							onChange={handleChange}
							name="username"
						/>
					</label>
				</div>
			</div>

			<div>
				<label>Bio: </label>
				<textarea
					rows="7"
					cols="40"
					value={currentBio}
					onChange={handleChange}
					name="bio"
				/>
			</div>
			<div>
				<button type="submit" onClick={updateUserCall}>
					Update
				</button>
			</div>
		</div>
	);
}

// import React, { useState, useEffect } from "react";
// // import axios from " axios";
// import { useHistory } from "react-router-dom";
// // import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../providers/AuthContext';
// import { getUserById, updateUser } from '../../util/getRequests';
// // import { useInput } from '../../util/customHooks';
// import { uploadPicture, getFirebaseIdToken } from '../../util/firebaseFunctions';
// // import { useHistory } from 'react-router-dom';

// import CloudUploadIcon from '@material-ui/icons/CloudUpload';

// export default function UserPageEdit(props) {
//     const history = useHistory();
//     const [profilePicture, setProfilePicture] = useState(null)
//     const[imagePreview, setImagePreview]
//         = useState(null)
//     const {
//         fullName,
//         userName,
//         Bio,
//         profilePic,
//         handleFileChange,
//     } = props;

// 		useEffect(() => {
// 			getUserCall();

// 		}, []);

//     const displayPreviewPicture = profilePic ? (
// 			<img src={profilePic} alt="new profile picture" />
//     ) : null;
//     const handleFileChange = (e) => {
// 			setProfilePicture(e.target.files[0]);
// 			setImagePreview(URL.createObjectURL(e.target.files[0]));
// 		};

// 		const returnToProfile = () => {
// 			history.push(`/user/${currentUser.id}`);
// 		};

//     return (
// 			<div
// 				className="divProfilePic"
// 				style={{ height: profilePic ? "100vh" : "100vh" }}
// 			>
// 				<h2>Profile Update</h2>
// 				<div className="upe-pfpContainer">
// 					<label htmlFor="upe-pfp" className="pfpLabel">
// 						<span className="MuiButton-startIcon MuiButton-iconSizeMedium">
// 							<CloudUploadIcon />
// 						</span>
// 						Upload a profile picture
// 					</label>
// 				</div>

// 				<input
// 					type="file"
// 					accept=".png, .jpg, .jpeg"
// 					onChange={handleFileChange}
// 					name="pfp"
// 					id="upe-pfp"
// 				/>
// 				<b>Preview: </b>
// 				{displayPreviewPicture}
// 			</div>
// 		);
// }
