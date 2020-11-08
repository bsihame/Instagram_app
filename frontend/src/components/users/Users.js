import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../util/getRequests";
// import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";

import "../../CSS/Users.css";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	// paper: {
	// 	padding: theme.spacing(2),
	// 	textAlign: "center",
	// 	color: theme.palette.text.secondary,
	// },
}));


export default function Users() {
	const [users, setUsers] = useState([]);
	const classes = useStyles();


	const getUsers = async () => {
		try {
			const res = await getAllUsers();
			setUsers(res);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);
	return (
	<>
				<Grid item xs={8}>
				{/* <Paper className={classes.paper}> */}
				<div className="displayAllUsers">
					{users.map((user) => {
						return (
							<div className="usersInfo" key={user.id}>
								<img
									src={user.profile_pic}
									alt="User Profile"
									className="userProfile"
								/>
								<p className="usersUserName">{user.username}</p>
							</div>
						);
					})}
				</div>
				
	 
						{/* </Paper> */}
						</Grid>
		
	
	</>
	);
}
