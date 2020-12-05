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

	useEffect(() => {
		getSingleUser();
		getUsers();
	}, []);
	return (
		<>
			<NavBar />

			<main className="mainUser">
				<section className="userContainer ">
					<div className={classes.root} id="leftDiv">
						<Grid item md={12}>
							<FilteredUsers />
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
								/>
								<span className="userUsernameLogged">
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

							<Grid container spacing={3} alignItems="center">
								{users.map((user) => {
									return (
										<>
											<Grid item xs={12} sm={6}>
												<img
													width="100%"
													src={user.profile_pic}
													alt="User Profile"
													className="exploreImage"
												/>
												<span className="exploreName">{user.username}</span>
											</Grid>
											<Grid item xs={12} sm={6}>
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
