import React, { useEffect, useState, useContext } from "react";
import NavBar from "../navbar_footer/NavBar";
import Footer from "../navbar_footer/Footer";
import { AuthContext } from "../../providers/AuthContext";
import { getUserById } from "../../util/getRequests";
import Posts from "../posts/Posts";
import "../../CSS/User.css";
import { CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FilteredUsers from "./FilteredUsers";
import Ads from "../ad/Ads";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
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

	cardContent: {
		flexGrow: 3,
	},
}));

export default function User() {
	const classes = useStyles();
	const { currentUser } = useContext(AuthContext);
	const [loggedUser, setLoggedUser] = useState({});
	let id = currentUser.id;


	const getSingleUser = async () => {
		try {
			const res = await getUserById(id);
			setLoggedUser(res);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getSingleUser();
	}, []);
	return (
		<>
			<NavBar />
			<div className="userContainer ">
				<div className={classes.root} id="rightDiv">
					<Grid container spacing={2}>
						<Grid item md={12}>
							<FilteredUsers />
							<Posts />
						</Grid>
					</Grid>
				</div>

				<div className={classes.root} id="leftDiv">
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<div>
								<img
									className="userProfile"
									src={loggedUser.profile_pic}
									alt="user_profile_picture"
								/>
								<h4>{loggedUser.username}</h4>
							</div>
							<div className="random_users">
								{/* <FilteredUsers /> */}
							</div>
							<Footer />
						</Grid>
					</Grid>
				</div>
			</div>
		</>
	);
}
