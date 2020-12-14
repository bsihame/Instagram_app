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
	const { currentUser } = useContext(AuthContext);
	const [loggedUser, setLoggedUser] = useState({});
	const [users, setUsers] = useState([]);
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

	const redirect = () => {
		history.push(`/${users.username}/profile`);
	};

	useEffect(() => {
		getSingleUser();
		getUsers();
	}, [users.username]);
	return (
		<>
			<NavBar />
			<main className="mainUser">
				<Grid className="userContainer ">
					<Grid item sx={8}>
						<div className={classes.root} id="leftDiv">
							<Container>
								<FilteredUsers />
							</Container>
							<Ads className="adds" />
							<Posts />
						</div>
					</Grid>
					<Grid item sx={3}>
						<div className={classes.root} id="rightDiv">
							<div className="exploreUsers">
								<Grid container spacing={3} alignItems="center">
									<img
										className="userProfileLogged"
										src={loggedUser.profile_pic}
										alt="user_profile_picture"
										onClick={redirect}
									/>
									<span className="userUsernameLogged" onClick={redirect}>
										{loggedUser.username}
									</span>
									<Grid item sx={4} sm={3}>
										<a className="switch">Switch</a>
									</Grid>
								</Grid>
							</div>
							<div className="random_users">
								<div className="suggestUsers">
									<div>
										<p className="suggest">Suggestions For You</p>
									</div>

									<div>
										<a className="seeAll">See All</a>
									</div>
								</div>

								<Grid item xs={5}>
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
															onClick={redirect}
														/>
														<span
															className="exploreNameUser"
															onClick={redirect}
														>
															{user.username}
														</span>
													</Grid>
													<Grid item sx={4} sm={6}>
														<a>Follow</a>
													</Grid>
												</div>
											</>
										);
									})}
								</Grid>
							</div>
							<Grid item sx={4} sm={6}>
								<Footer className="userFooter" />
							</Grid>
						</div>
					</Grid>
				</Grid>
			</main>
		</>
	);
}
