import React, { useState, useEffect, useContext } from "react";
import { getPostByPosterId, getUserByUserName } from "../../util/getRequests";
import { AuthContext } from "../../providers/AuthContext";
import { useHistory, useParams } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import "../../CSS/UserProfile.css";
import PostsGallery from "../posts/PostsGallery";
import Icon from "@material-ui/core/Icon";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import PageAnimation from "./PageAnimation";
import Footer from "../navbar_footer/Footer";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import "../../CSS/Footer.css";
const styles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
	closeButton: {
		position: "absolute",
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
});
const DialogTitle = withStyles(styles)((props) => {
	const { children, classes, onClose, ...other } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant="h6">{children}</Typography>
			{onClose ? (
				<IconButton
					aria-label="close"
					className={classes.closeButton}
					onClick={onClose}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});
const DialogContent = withStyles((theme) => ({
	root: {
		width: 500,
		padding: theme.spacing(1),
		display: "flex",
		justifyContent: "center",
	},
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(1),
		display: "flex",
		justifyContent: "center",
	},
}))(MuiDialogActions);

export default function UserProfile() {
	const { username } = useParams();
	const { currentUser, token } = useContext(AuthContext);
	let id = currentUser.id;
	let poster_id = id;
	const history = useHistory();
	const [user, setUser] = useState({});
	const [post, setPost] = useState([]);
	const [PostLength, setPostLength] = useState("");
	const [error, setError] = useState(null);
	const [open, setOpen] = useState(false);
	const [openSetting, setOpenSetting] = useState(false)

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const openSettingDialog = () => {
		setOpenSetting(true);
	};
	const closeSettingDialog = () => {
		setOpenSetting(false);
	};

	const useStyles = makeStyles({
		root: {
			maxWidth: "100%",
			boxShadow: "none",
		},
	});
	const classes = useStyles();

	const getUser = async () => {
		try {
			const res = await getUserByUserName(username, token);
			debugger
			setUser(res);
		} catch (error) {
			console.log(error);
		}
	};
	const getPostLength = async () => {
		const res = await getPostByPosterId(poster_id, token);
		setPost(res);
		setPostLength(res.length);
		try {
			if (res) {
				setPost(res);
				setPostLength(res.length);
				setError(null);
			}
		} catch (error) {
			console.log(error);
			setError(error.message);
			setPost([]);
		}
	};
	const postText = () => {
		if (post.length > 1) {
			return " Posts";
		} else {
			return " Post";
		}
	};

	const followersText = () => {
		return "0 follower";
	};

	const followingText = () => {
		return "0 following";
	};

	const redirect = () => {
		history.push(`/${user.username}/edit`);
	};

	const renderEditUserButton = () => {
		if (currentUser.id === user.id) {
			return (
				<button className="editButton" onClick={redirect}>
					Edit Profile
				</button>
			);
		} else {
			return null;
		}
	};
	const handleMenuItemClick = () => {
		alert(`SORRY! This feature is under construction! `);
	};

	useEffect(() => {
		getUser();
		getPostLength();
	}, [username]);

	return (
		<div className="profile_container">
			<Card ClassName={classes.root} id="root">
				<CardActionArea>
					<div className="userProfileDiv">
						<img
							src={user.profile_pic}
							alt="User_Profile_Picture"
							className="userProfilePicture"
							onClick={handleClickOpen}
						/>
						<Dialog
							onClose={handleClose}
							aria-labelledby="customized-dialog-title"
							open={open}
						>
							<DialogTitle
								className="dialogTitle"
								id="customized-dialog-title"
								onClose={handleClose}
							>
								Change Profile Photo
							</DialogTitle>
							<DialogContent dividers>
								<DialogActions
									className="buttonDialog"
									id="uploadPhoto"
									autoFocus
									onClick={handleClose}
									color="primary"
								>
									Upload Photo
								</DialogActions>
							</DialogContent>
							<DialogContent dividers>
								<DialogActions
									className="buttonDialog"
									id="removeCurrentPhoto"
									autoFocus
									onClick={handleClose}
									color="secondary"
								>
									Remove Current Photo
								</DialogActions>
							</DialogContent>
							<DialogActions
								className="buttonDialog"
								autoFocus
								onClick={handleClose}
								color="primary"
							>
								Cancel
							</DialogActions>
						</Dialog>

						<div className="userEditDiv">
							<div className="userProfileBox">
								<div className="userNameProfile">
									<h2 className="greeting">{user.username}</h2>
								</div>
								<div className="editProfileButton">
									{renderEditUserButton()}
								</div>
								<div>
									<Brightness5Icon
										className="IconBrightness"
										fontSize="large"
										onClick={openSettingDialog}
									/>
								</div>
								<Dialog
									onClose={closeSettingDialog}
									aria-labelledby="customized-dialog-title"
									open={openSetting}
								>
									{/* <DialogTitle
										className="dialogTitle"
										id="customized-dialog-title"
										onClose={closeSettingDialog}
									>
										Profile
									</DialogTitle> */}
									<DialogContent dividers>
										<DialogActions
											className="buttonDialog"
											id="uploadPhoto"
											autoFocus
											onClick={closeSettingDialog}
											color="primary"
										>
											Change Password
										</DialogActions>
									</DialogContent>
									<DialogContent dividers>
										<DialogActions
											className="buttonDialog"
											id="removeCurrentPhoto"
											autoFocus
											onClick={closeSettingDialog}
											color="secondary"
										>
											Nametag
										</DialogActions>
									</DialogContent>

									<DialogContent dividers>
										<DialogActions
											className="buttonDialog"
											id="uploadPhoto"
											autoFocus
											onClick={closeSettingDialog}
											color="primary"
										>
											Apps and Websites
										</DialogActions>
									</DialogContent>

									<DialogContent dividers>
										<DialogActions
											className="buttonDialog"
											id="uploadPhoto"
											autoFocus
											onClick={closeSettingDialog}
											color="primary"
										>
											Notifications
										</DialogActions>
									</DialogContent>

									<DialogContent dividers>
										<DialogActions
											className="buttonDialog"
											id="uploadPhoto"
											autoFocus
											onClick={closeSettingDialog}
											color="primary"
										>
											Privacy and Security
										</DialogActions>
									</DialogContent>

									<DialogContent dividers>
										<DialogActions
											className="buttonDialog"
											id="uploadPhoto"
											autoFocus
											onClick={closeSettingDialog}
											color="primary"
										>
											Login Activity
										</DialogActions>
									</DialogContent>
									<DialogActions
										className="buttonDialog"
										autoFocus
										onClick={closeSettingDialog}
										color="primary"
									>
										Cancel
									</DialogActions>
								</Dialog>
							</div>

							<div className="postAndFollowers">
								<div className="postAndFollowersText">
									{PostLength} {postText()}
								</div>
								<div
									className="postAndFollowersText"
									onClick={() => handleMenuItemClick()}
								>
									{followersText()}
								</div>
								<div
									className="postAndFollowersText"
									onClick={() => handleMenuItemClick()}
								>
									{followingText()}
								</div>
							</div>
						</div>
					</div>
				</CardActionArea>
			</Card>
			<div>
				<PageAnimation />
			</div>
			<div>
				<Footer className="userProfileFooter" />
			</div>
		</div>
	);
}
