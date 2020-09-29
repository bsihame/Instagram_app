import React, { useEffect, useState, useContext } from "react";
import NavBar from "../navbar_footer/NavBar";
import Footer from "../navbar_footer/Footer";
import { AuthContext } from "../../providers/AuthContext";
import { getUserById } from "../../util/getRequests";
import Users from "./Users";
import Posts from "../posts/Posts";
import "../../CSS/User.css";
import { CardDescription } from "semantic-ui-react";
import { CardContent, CardMedia, Grid, Typography } from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";


const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: "80%",
		display: "flex",
		flexDirection: "column",
	},
	cardMedia: {
		paddingTop: "56.25%", // 16:9
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
			<Container className={classes.cardGrid} maxWidth="md">
				{/* <Grid container spacing={4}> */}
					{/* <Posts /> */}
					{/* <Grid item  xs={16} sm={10} md={6}> */}
						{/* <Card className={classes.card}>
							<CardMedia
								className={classes.cardMedia}
								image=""
								title="Image tile"
							/>
						</Card> */}
				<CardContent className={classes.carsContent}>
					{/* <Grid item  xs={16} sm={10} md={6}>  */}
							{/* <Typography gutterBottom variant="h4" component="h2"></Typography> */}
						<Posts />
						{/* </Grid>  */}
						</CardContent>
					{/* </Grid> */}
				
				{/* </Grid> */}
			</Container>

			{/* <div className="userContainer">
				<div className="rightDiv">
					<Users />
					<div>
					<Posts />
					</div>
				</div>
				<div className="leftDiv">
					<img
						src={loggedUser.profile_pic}
						alt="User_Profile_picture"
					className="userProfile"
			 		/>
			 		<p className="userUsername">{loggedUser.username}</p>
					<Footer />
			 	</div>
			</div> */}
		</>
	);
}
