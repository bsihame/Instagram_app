import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthContext";
import { logout } from "../../util/firebaseFunctions";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExploreIcon from "@material-ui/icons/Explore";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
// import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";

import { getUserById } from "../../util/getRequests";
import Search from "../search/Search";
import { Header } from "semantic-ui-react";

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
		width: "100%",
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
			alignItems: "center",
			justifyContent: "center",
		},
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(1),
		marginLeft: 0,
		width: "80%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(2),
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 0),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(0.5em + ${theme.spacing(1)}px)`,
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
	const [username, setUserName] = useState("");
	// const [firstName, setFirstName] = useState(null);
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const getUserName = async () => {
		const data = await getUserById(currentUser.id);
		setUserName(data.username);
	};

	useEffect(() => {
		if (currentUser) {
			getUserName();
		}
	}, [username]);

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
	const onSubmit = () => {
		return (
			<Search />
		)
	}

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
			<NavLink className="profile" to={`/${username}/profile`}>
				<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			</NavLink>

			<NavLink className="profile" to={`/${username}/edit`}>
				<MenuItem onClick={handleMenuClose}>Edit Profile</MenuItem>
			</NavLink>

			<NavLink className="profile" to={`/${username}/createPost`}>
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
		<Header className={classes.grow}>
			<AppBar position="static" color="#fff">
				<Toolbar className="title">
					<NavLink exact to={"/"}>
						<h2 className="title">Instagram</h2>
					</NavLink>

					<section className={classes.search} id="search">
						<Search />
					</section>

					<nav className={classes.sectionDesktop}>
						<NavLink exact to={"/"}>
							<IconButton aria-label="home" color="inherit">
								<Badge color="secondary">
									<HomeIcon />
								</Badge>
							</IconButton>
						</NavLink>

						<NavLink className="explore" to={"/explore"}>
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
					</nav>

					<nav className={classes.sectionMobile}>
						<IconButton
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						>
							<MoreIcon />
						</IconButton>
					</nav>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</Header>
	);
}
