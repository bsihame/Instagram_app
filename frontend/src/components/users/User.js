import React, { useEffect, useState, useContext } from "react";
import NavBar from "../navbar_footer/NavBar";
import Footer from "../navbar_footer/Footer";
import { AuthContext } from "../../providers/AuthContext";
import { getUserById } from "../../util/getRequests";
import Posts from "../posts/Posts";
import "../../CSS/User.css";
import { CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
	let id = currentUser.id;
	const [loggedUser, setLoggedUser] = useState({});

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

			<CardContent className={classes.carsContent}>
				<Posts />
			</CardContent>

			<Footer />
		</>
	);
}
