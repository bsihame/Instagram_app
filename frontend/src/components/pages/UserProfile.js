import React, { useState, useEffect, useContext } from "react";
import { getUserById } from "../../util/getRequests";
import { AuthContext } from "../../providers/AuthContext";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import "../../CSS/UserProfile.css";

export default function UserProfile() {
	const { currentUser } = useContext(AuthContext);
	let id = currentUser.id;
	const history = useHistory();
	const [user, setUser] = useState({});
	const useStyles = makeStyles({
		root: {
			maxWidth: 600,
		},
	});
	const classes = useStyles();

	const getUser = async () => {
		try {
			const res = await getUserById(id);
			setUser(res);
		} catch (error) {
			console.log(error);
		}
	};

	const redirect = () => {
		history.push(`/${user.username}/edit`);
	};

	const editingUser = () => {
		if (currentUser.id === user.id) {
			return (
				<button className="editButton" onClick={redirect}>
					Edit Profile
				</button>
			);
		} else {
			return null;
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className="profile_container">
			<Card ClassName={classes.root}>
				<CardActionArea>
					<div className="userProfileDiv">
						<h2 className="greeting">Welcome {user.full_name}</h2>
						<img
							src={user.profile_pic}
							alt="User_Profile_Picture"
							className="userProfilePicture"
						/>

						<div className="aboutParagraph">
							<div className="profile_info">
								<p className="profileP">
									<span className="boldFont">Full Name: </span>
									{user.full_name}
								</p>
								<p className="profileP">
									<span className="boldFont">User Name: </span>
									{user.username}
								</p>
								<p className="profileP">
									<span className="boldFont">Email: </span> {user.email}
								</p>
								<p className="profileP">
									<span className="boldFont">Bio: </span>
									{user.bio}
								</p>
							</div>
							<div className="editProfileButton">{editingUser()}</div>
						</div>
					</div>
				</CardActionArea>
			</Card>
		</div>
	);
}
