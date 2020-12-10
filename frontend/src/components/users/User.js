import React, { useEffect, useState, useContext } from "react";
import NavBar from "../navbar_footer/NavBar";
import Footer from "../navbar_footer/Footer";
import { AuthContext } from "../../providers/AuthContext";
import { getUserById } from "../../util/getRequests";
import { getAllUsers } from "../../util/getRequests";
import Posts from "../posts/Posts";
import "../../CSS/User.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FilteredUsers from "./FilteredUsers";
import Ads from "../ad/Ads";
import "../../CSS/Ads.css"
// import { CardContent } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
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
		history.push(`/${users.username}/edit`);
	};

	useEffect(() => {
		getSingleUser();
		getUsers();
	}, [users.username]);
	return (
		<>
			<NavBar />
			<main className="mainUser">
				<section className="userContainer ">
					<div className={classes.root} id="leftDiv">
						<Grid item md={12}>
							{/* <Paper className="filteredUsers"> */}
							<Grid
								item
								md={12}
								direction="row"
								justify="center"
								alignItems="center"
							>
								<FilteredUsers />
							</Grid>
							{/* </Paper> */}
							<Ads className="adds" />
							<Posts />
						</Grid>
					</div>

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
								<Grid item xs={12} sm={6}>
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

							<Grid
								container
								spacing={1}
								// alignItems="left"
								// container
								// direction="row"
								// justify="space-around"
								// alignItems="baseline"
							>
								{users.map((user) => {
									return (
										<>
											<Grid item xs={12} sm={6}>
												<img
													width="100%"
													src={user.profile_pic}
													alt="User Profile"
													className="exploreImage"
													onClick={redirect}
												/>
												<span className="exploreName" onClick={redirect}>
													{user.username}
												</span>
											</Grid>
											<Grid item xs={12} sm={6} width={12}>
												<a>Follow</a>
											</Grid>
										</>
									);
								})}
							</Grid>
						</div>
						<Footer className="userFooter" />
					</div>
				</section>
			</main>
		</>
	);
}
