import React, { useEffect, useState, useContext } from "react";
import NavBar from "../navbar_footer/NavBar";
import Footer from "../navbar_footer/Footer";
import Posts from "../posts/Posts";
import Grid from "@material-ui/core/Grid";
import FilteredUsers from "./FilteredUsers";
import Ads from "../ad/Ads";
import { AuthContext } from "../../providers/AuthContext";
import { getUserById } from "../../util/getRequests";
import { getAllUsers } from "../../util/getRequests";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "../../CSS/User.css";
import "../../CSS/Ads.css";
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		flexDirection: "column",
	},
	postImage: {
		width: "100%",
	},
}));

export default function User() {
	const classes = useStyles();
	const history = useHistory();
	// const { username } = useParams();
	const { currentUser } = useContext(AuthContext);
	const [loggedUser, setLoggedUser] = useState({});
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState({});
	const [userName, setUserName]= ("")
	let id = currentUser.id;
	
	const getSingleUser = async () => {
		try {
			const res = await getUserById(id);
			setLoggedUser(res);
		} catch (error) {
			console.log(error);
		}
	};

	const getUsers = async () => {
		try {
			const allUsers = await getAllUsers();
			const filtered = allUsers.filter((user) => user.id !== id);
			setUsers(filtered);
		} catch (error) {
			console.log(error);
		}
	};
	
	useEffect(() => {
		getSingleUser();
		getUsers();
	},[userName]);
	return (
		<>
			<NavBar />
			<main className="mainUser">
				<div className="userContainer ">
					<div className={classes.root} id="leftDiv">
						<Container>
							<FilteredUsers />
						</Container>
						<Ads className="adds" />
						<Posts />
					</div>
					<div className={classes.root} id="rightDiv">
						<div className="exploreUsers">
							<Grid spacing={3} alignItems="center">
								<img
									className="userProfileLogged"
									src={loggedUser.profile_pic}
									id={loggedUser.id}
									alt="user_profile_picture"
									onClick={() =>
										history.push(`/${loggedUser.username}/profile`)
									}
								/>

								<span
									className="userUsernameLogged"
									onClick={() =>
										history.push(`/${loggedUser.username}/profile`)
									}
								>
									{loggedUser.username}
								</span>
							</Grid>
							<a className="switch">Switch</a>
						</div>
						<div className="random_users">
							<div className="suggestUsers">
								<Grid spacing={3} alignItems="center">
									<p className="suggest">Suggestions For You</p>
								</Grid>
								<a className="seeAll">See All</a>
							</div>

							<div item xs={5}>
								{users.map((user) => {
									return (
										<>
											<div className="followUser">
												<Grid spacing={3} alignItems="center">
													<img
														width="100%"
														src={user.profile_pic}
														alt="User Profile"
														className="exploreImage"
														onClick={() => {
															history.push(`/${user.username}/profile`);
														}}
													/>

													<span
														className="exploreNameUser"
														onClick={() => {
															history.push(`/${user.username}/profile`);
														}}
													>
														{user.username}
													</span>
												</Grid>
												<a>Follow</a>
											</div>
										</>
									);
								})}
							</div>
						</div>
						<div>
							<Footer className="footerUser" />
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
