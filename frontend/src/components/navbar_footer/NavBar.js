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

import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthContext";
import { getUserById } from "../../util/getRequests";
// import Logout from "../login_signup/Logout";
import { logout } from "../../util/firebaseFunctions";

import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExploreIcon from "@material-ui/icons/Explore";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import SvgIcon from "@material-ui/core/SvgIcon";
// import ExploreIcon from "@material-ui/icons/Explore";
// import { ExploreIcon } from "../../images/explore.png"

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(3),
			width: "auto",
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding +font size from searchIcon,
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
	sectionMobile: {
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
}));

export default function PrimarySearchAppBar() {
	const { currentUser } = useContext(AuthContext);
	const [firstName, setFirstName] = useState("");
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
	const getFirstName = async () => {
		const data = await getUserById(currentUser.id);
		setFirstName(data.full_name.split(" ")[0]);
	};
	useEffect(() => {
		getFirstName();
	}, []);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = "primary-search-account-menu";
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<NavLink className="profile" to={`/${firstName}`}>
				<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			</NavLink>

			<NavLink className="profile" to={`/${firstName}/edit`}>
				<MenuItem onClick={handleMenuClose}>Edit Profile</MenuItem>
			</NavLink>

			<NavLink className="profile" to={`/${firstName}/createPost`}>
				<MenuItem onClick={handleMenuClose}>Create a Post</MenuItem>
			</NavLink>

			<MenuItem onClick={logout} className="logout" color="primary">
				Log Out
			</MenuItem>
		</Menu>
	);

	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton aria-label="show 4 new mails" color="inherit">
					<Badge badgeContent={4} color="secondary">
						<MailIcon />
					</Badge>
				</IconButton>
				<p>Messages</p>
			</MenuItem>
			<MenuItem>
				<IconButton aria-label="show 11 new notifications" color="inherit">
					<Badge badgeContent={11} color="secondary">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				>
					<AccountCircle color="inherit" />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);

	return (
		<div className={classes.grow}>
			<AppBar position="static" color="#fff">
				<Toolbar className="title">
					<Typography
						className={classes.title}
						variant="h2"
						noWrap
						color="inherit"
						id="inst"
					>
						Instagram
					</Typography>

					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ "aria-label": "search" }}
						/>
					</div>

					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<NavLink exact to={"/user"}>
							<IconButton aria-label="home" color="inherit">
								<Badge color="secondary">
									<HomeIcon />
								</Badge>
							</IconButton>
						</NavLink>

						<NavLink className="directMessage" to={"/explore"}>
							<IconButton aria-label="explore" color="inherit">
								<Badge color="secondary">
									<ExploreIcon to={"/explore"} />
								</Badge>
							</IconButton>
						</NavLink>

						<NavLink className="directMessage" to={"/direct/inbox/"}>
							<IconButton aria-label="show 4 new mails" color="inherit">
								<Badge badgeContent={4} color="secondary">
									<MailIcon />
								</Badge>
							</IconButton>
						</NavLink>

						<NavLink className="directMessage" to={"/direct/inbox"}>
							<IconButton
								aria-label="show 17 new notifications"
								color="inherit"
							>
								<Badge badgeContent={17} color="secondary">
									<NotificationsIcon />
								</Badge>
							</IconButton>
						</NavLink>

						<IconButton
							edge="end"
							aria-label="account of current user"
							aria-controls={menuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
					</div>

					<div className={classes.sectionMobile}>
						<IconButton
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						>
							<MoreIcon />
						</IconButton>
					</div>

			</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</div>
	);
}
