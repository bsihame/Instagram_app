import React, { useEffect, useState, useContext } from "react";
import NavBar from "../navbar_footer/NavBar";
import Footer from "../navbar_footer/Footer";
import { AuthContext } from "../../providers/AuthContext";
import { getUserById } from "../../util/getRequests";
import Users from "./Users";
import Posts from "../posts/Posts";
import "../../CSS/User.css";
import { CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
const useStyles = makeStyles((theme) => ({
	// icon: {
	// 	marginRight: theme.spacing(2),
	// },
	// cardGrid: {
	// 	paddingTop: theme.spacing(8),
	// 	paddingBottom: theme.spacing(8),
	// },
	card: {
		height: "80%",
		display: "flex",
		flexDirection: "column",
		
		
	},
	// cardMedia: {
	// 	paddingTop: "56.25%",
	// },
	cardContent: {
		flexGrow: 3,
	},
}));

export default function User() {
	const classes = useStyles();

	const { currentUser } = useContext(AuthContext);
	let id = currentUser.id;
	const [loggedUser, setLoggedUser] = useState({});
	// const [expended, setExpended] = useState(false);

	const getSingleUser = async () => {
		try {
			const res = await getUserById(id);
			setLoggedUser(res);
		} catch (error) {
			console.log(error);
		}
	};

	// const handleExpendClick = () => {
	// 	setExpended(!expended);
	// }

	useEffect(() => {
		getSingleUser();
	}, []);
	return (
		<>
			<NavBar />
			{/* <Container className={classes.cardGrid} maxWidth="md"> */}
				<CardContent className={classes.carsContent}>
					<Posts />
				</CardContent>
			{/* </Container> */}
			<Footer />
		</>
	);
}
