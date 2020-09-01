// import React, { useState, useContext, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import "../../CSS/NavBar.css";
// import Logout from "../login_signup/Logout";
// import { AuthContext } from "../../providers/AuthContext";
// import { getUserById } from "../../util/getRequests";

// export default function NavBar() {
// 	const { currentUser } = useContext(AuthContext);
// 	console.log(currentUser);
// 	const [firstName, setFirstName] = useState("");
// 	const getFirstName = async () => {
// 		const data = await getUserById(currentUser.id);
// 		setFirstName(data.full_name.split(" ")[0]);
// 	};
// 	useEffect(() => {
// 		getFirstName();
// 	}, []);

// 	return (
// 		// <>
// 		// 	<nav className="navbarContainer">
// 		// 		<div className="title">
// 		// 			<h2 className="inst">Instagram</h2>
// 		// 		</div>
// 		// 		<div className="right">
// 		// 			<div className="inputDiv">
// 		// 				<input placeholder="Search" />
// 		// 			</div>
// 		// 			<div className="navLinkDiv">
// 		// 				<NavLink className="home" exact to={"/user"}>
// 		// 					homeIcon
// 		// 				</NavLink>
// 		// 				<NavLink className="directMessage" to={"/direct/inbox/"}>
// 		// 					message
// 		// 				</NavLink>
// 		// 				<NavLink className="explore" to={"/explore"}>
// 		// 					explore
// 		// 				</NavLink>
// 		// 				<NavLink className="heart" to={"/activity"}>
// 		// 					heart
// 		// 				</NavLink>
// 		// 				<a
// 		// 					className="nav-link dropdown-toggle "
// 		// 					data-toggle="dropdown"
// 		// 					role="button"
// 		// 					aria-expanded="false"
// 		// 				>
// 		// 					Hi, {firstName}
// 		// 				</a>
// 		// 				<div className="dropdown-menu">
// 		// 					<a className="dropdown-item" href={`/${firstName}`}>
// 		// 					PROFILE
// 		// 					</a>
// 		// 					<div className="dropdown-divider"></div>
// 		// 					<a className="dropdown-item" onClick={Logout}>
// 		// 						LOG OUT
// 		// 					</a>
// 		// 				</div>
// 		// 				<Logout />
// 		// 			</div>
// 		// 		</div>
// 		// 	</nav>
// 		// </>
	
	

// // <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
// //  Brand 
// //   <a class="navbar-brand" href="#">Logo</a>
// // Links 
// //   <ul class="navbar-nav">
// //     <li class="nav-item">
// //       <a class="nav-link" href="#">Link 1</a>
// //     </li>
// //     <li class="nav-item">
// //       <a class="nav-link" href="#">Link 2</a>
// //     </li>

// //     Dropdown 
// //     <li class="nav-item dropdown">
// //       <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
// //         Dropdown link
// //       </a>
// //       <div class="dropdown-menu">
// //         <a class="dropdown-item" href="#">Link 1</a>
// //         <a class="dropdown-item" href="#">Link 2</a>
// //         <a class="dropdown-item" href="#">Link 3</a>
// //       </div>
// //     </li>
// //   </ul>
// // </nav>
// 		<>
		
		
// 		</>
// 	);		
//  } 



import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function MenuAppBar() {
	const classes = useStyles();
	const [auth, setAuth] = React.useState(true);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleChange = (event) => {
		setAuth(event.target.checked);
	};

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={classes.root}>
			<FormGroup>
				<FormControlLabel
					control={
						<Switch
							checked={auth}
							onChange={handleChange}
							aria-label="login switch"
						/>
					}
					label={auth ? "Logout" : "Login"}
				/>
			</FormGroup>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Photos
					</Typography>
					{auth && (
						<div>
							<IconButton
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleMenu}
								color="inherit"
							>
								<AccountCircle />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={open}
								onClose={handleClose}
							>
								<MenuItem onClick={handleClose}>Profile</MenuItem>
								<MenuItem onClick={handleClose}>My account</MenuItem>
							</Menu>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
}
