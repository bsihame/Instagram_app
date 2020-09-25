 import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthContext';
import { getUserById, updateUser } from '../../util/getRequests';
import { useInput } from '../../util/customHooks';
import { uploadPicture, getFirebaseIdToken } from '../../util/firebaseFunctions';
import { useHistory } from 'react-router-dom';


export default function UserPageEdit(firstName) {
	const history = useHistory();
	const { currentUser } = useContext(AuthContext);
	console.log(currentUser)
	const [user, setUser] = useState({});
	const[profilePicture, setProfilePicture] = useState(null);
    const [imagePreview, setImagePreview]
        = useState(null);
	const [currentFullName, setCurrentFullName] = useState("");
	const [currentUserName, setCurrentUserName] = useState("");
	const [currentBio, setCurrentBio] = useState("");
	const token = getFirebaseIdToken();

	const fullName = useInput(user.full_name);
	const userName = useInput("");
	const bio = useInput("");
	let id = currentUser.id;
	console.log(id);

	const getUserCall = async () => {
		const data = await getUserById(currentUser.id);
		debugger
		setCurrentFullName(data.full_name);
		setCurrentUserName(data.username);
		setCurrentBio(data.bio);
		setUser(data);
	};

	const updateUserCall = async () => {
        const userData = {
            // profilePicture,
            // handleFileSelect,
			full_name: fullName.value,
			username: userName.value,
			bio: bio.value,
        };
        
        const displayPreviewPicture = profilePicture ? (
			<img src={profilePicture} alt="new profile picture" />
    ) : null;
    const handleFileSelect = (e) => {
			setProfilePicture(e.target.files[0]);
			setImagePreview(URL.createObjectURL(e.target.files[0]));
		};

		const returnToProfile = () => {
			history.push(`/user/${currentUser.id}`);
		};
	
    
		const response = await updateUser(currentUser.id, {
			headers: {
				authtoken: token,
			},
		});
		debugger;
	};

	const handleFileSelect = (e) => {
		setProfilePicture(e.target.files[0]);
	};
	useEffect(() => {
		getUserCall();
		updateUserCall();
	}, []);
	return (
		<div className="up-edit">
			<div className="editContainer">
				<label>
					<span>Profile Picture: </span>
					<input
						type="file"
						accept=".png, .jpg, .jpeg"
						onChange={handleFileSelect}
					/>
				</label>

				<div className="upe-userInteraction">
					<label>
						<span>Full Name: </span>
						<input type="text" placeholder={user.full_name} {...fullName} />
					</label>
				</div>
				<div className="upe-userInteraction">
					<label>
						<span>User Name:</span>
						<input type="text" placeholder={user.username} {...userName} />
					</label>
				</div>
			</div>

			<div>
				<label>Bio: </label>
				<textarea rows="7" cols="40" placeholder={user.bio} {...bio} />
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
