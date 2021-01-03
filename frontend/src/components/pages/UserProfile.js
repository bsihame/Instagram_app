import React, { useState, useEffect, useContext } from "react";
import { getPostByPostId, getUserByUserName } from "../../util/getRequests";
import { AuthContext } from "../../providers/AuthContext";
import { useHistory, useParams } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import "../../CSS/UserProfile.css";
import DisplayPost from "../posts/DisplayPost";
// import { Brightness5SharpIcon } from "@material-ui/icons";
// import { ReactComponent as Brightness5SharpIcon } from "./Brightness5Sharp.svg";
import Icon from "@material-ui/core/Icon";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import PageAnimation from "./PageAnimation";
export default function UserProfile() {
	const { username } = useParams()
	const { currentUser, token } = useContext(AuthContext);
	let id = currentUser.id;
	let poster_id = id;
	const history = useHistory();
	const [user, setUser] = useState({});
	const [post, setPost] = useState([]);
	const [PostLength, setPostLength] = useState("");
	const [error, setError] = useState(null)
	const useStyles = makeStyles({
		root: {
			maxWidth: "100%",
		},
	});
	const classes = useStyles();

	const getUser = async () => {
		try {
			const res = await getUserByUserName(username);
			setUser(res);
		} catch (error) {
			console.log(error);
		}
	};
	const getPostLength = async () => {
		const res = await getPostByPostId(poster_id, token);
		debugger
		setPost(res);
		setPostLength(res.length);
		try {
			if (res) {
				setPost(res);
				setPostLength(res.length)
				setError(null);
			}
		} catch (error) {
			console.log(error);
			setError(error.message);
			setPost([]);
		}
	}
	const postText = () => {
		if (post.length > 1) {
			return " Posts"
		} else {
			return " Post"
		}
	}

	const followersText = () => {
		return "0 follower";
		// if (post.length > 1) {
		// 	return " followers";
		// } else {
		// 	return " follower";
		// }
	};

	const followingText = () => {
		return "0 following";
		// if (post.length > 1) {
		// 	return " followings";
		// } else {
		// 	return " following";
		// }
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
		getPostLength();
	}, [username]);

	return (
		<div className="profile_container">
			<Card ClassName={classes.root}>
				<CardActionArea>
					<div className="userProfileDiv">
						<img
							src={user.profile_pic}
							alt="User_Profile_Picture"
							className="userProfilePicture"
						/>
						{/* <div> */}
						<div className="userEditDiv">
							<div className="userProfileBox">
								<div className="userNameProfile">
									<h2 className="greeting">{user.username}</h2>
								</div>
								<div className="editProfileButton">{editingUser()}</div>
								<div>
									<Brightness5Icon
										className="IconBrightness"
										fontSize="large"
									/>
								</div>
							</div>

							<div className="postAndFollowers">
								<div className="postAndFollowersText">
									{PostLength} {postText()}
								</div>
								<div className="postAndFollowersText">{followersText()}</div>
								<div className="postAndFollowersText">{followingText()}</div>
							</div>
						</div>
					</div>

					{/* <div className="aboutParagraph">
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
						</div> */}
					{/* <div className="editProfileButton">{editingUser()}</div>
						</div> */}
					{/* </div> */}
					<div>
						<div>
							<PageAnimation />
						</div>
						<DisplayPost />
					</div>
				</CardActionArea>
			</Card>
		</div>
	);
}
