import React, { useEffect, useState, useContext } from "react";
import NavBar from "../navbar_footer/NavBar";
import Footer from "../navbar_footer/Footer";
import { AuthContext } from "../../providers/AuthContext";
import { getUserById } from "../../util/getRequests";
import { getAllUsers } from "../../util/getRequests";
import Posts from "../posts/Posts";
import "../../CSS/User.css";
import { CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FilteredUsers from "./FilteredUsers";
import Ads from "../ad/Ads";
// import RandomUsers from "./RandomUsers";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		flexDirection:"column",
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
	card: {
		height: "80%",
		display: "flex",
		flexDirection: "column",
		alignContent: "center",
	},

	postImage: {
		width: "100%",

	},

	cardContent: {
		flexGrow: 3,
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
						{/* <Grid container spacing={2}> */}
						<Grid item md={12}>
							<FilteredUsers />
							<Posts />
						</Grid>
						{/* </Grid> */}
					</div>

					<div className={classes.root} id="rightDiv">
						<div className="exploreUsers">
							<Grid container spacing={3} alignItems="center">
								{/* <Grid item xs={12} sm={6}> */}
								{/* <div className="userInfo"> */}

								<Grid item xs={12} sm={6}>
									<img
										className="userProfileLogged"
										src={loggedUser.profile_pic}
										alt="user_profile_picture"
									/>
									<span
										// className={classes.paper}
										className="userUsernameLogged"
									>
										{loggedUser.username}
									</span>
								</Grid>

								<Grid item xs={12} sm={6}>
									{/* <div className="switchDiv"> */}
									<a className="switch">Switch</a>
									{/* </div> */}
								</Grid>
								{/* </div> */}
							</Grid>
							{/* </Grid> */}
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
							{/* <div className="exploreUsers"> */}
								<Grid container spacing={3} alignItems="center">
								{users.map((user) => {
									return (
										<>
											
										{/* <div className="explore" key={user.id}> */}
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
											{/* </div> */}
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
