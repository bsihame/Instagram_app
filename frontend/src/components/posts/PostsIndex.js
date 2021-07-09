import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom"
import CommentsForm from "../comments/CommentsForm";
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "../../providers/AuthContext";
import Likes from "../../components/likes/Likes";
import { getUserById } from "../../util/getRequests";
import Card from "@material-ui/core/Card";
import Popover from "@material-ui/core/Popover";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "../../CSS/PostsIndex.css";
import { CardHeader, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		marginBottom: 60,
	},
}));

const options = [
	"Report",
	"Unfollow",
	"Go to post",
	"Share to...",
	"Copy Link",
	"Embed",
	"Cancel",
];

export default function PostsIndex({ posts }) {
		const history = useHistory();
	const classes = useStyles();
	const [user, setUser] = useState("");
	const { currentUser } = useContext(AuthContext);
	let id = currentUser.id;
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [selectedIndex, setSelectedIndex] = React.useState(1);

	const handleMoreMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuItemClick = (event, index) => {
		setSelectedIndex(index);
		alert(`${options[index]} feature under construction! `);
		setAnchorEl(null);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const getSingleUser = async () => {
		try {
			const res = await getUserById(id);
			setUser(res);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getSingleUser();
	}, []);

	return (
		<>
			<Container
				className="post-container"
				display="flex"
			>
				{posts.map((post) => {
					return (
						<Card className={classes.root}>
							<CardHeader
								avatar={
									<Avatar
										aria-label="userAvatar"
										className={classes.avatar}
										src={post.profile_pic}
										onClick={() => {
											history.push(`/${post.username}/profile`);
										}}
									></Avatar>
								}
								action={
									<>
										<IconButton aria-label="settings" onClick={handleMoreMenu}>
											<MoreHorizIcon />
										</IconButton>

										<Popover
											open={Boolean(anchorEl)}
											anchorEl={anchorEl}
											onClose={handleClose}
											anchorOrigin={{
												vertical: "bottom",
												horizontal: "center",
											}}
											transformOrigin={{
												vertical: "top",
												horizontal: "center",
											}}
										>
											{options.map((option, index) => (
												<MenuItem
													key={option}
													onClick={(event) => handleMenuItemClick(event, index)}
												>
													{option}
												</MenuItem>
											))}
										</Popover>
									</>
								}
								title={
									<>
										<h4
											className="usernameTitle"
											onClick={() => {
												history.push(`/${post.username}/profile`);
											}}
										>
											{post.username}
										</h4>
									</>
								}
							/>
							<div className="card" key={post.id}>
								<img className="img_post" src={post.picture} alt="Card image" />
								<div className="cardLikeAndComments">
									<Likes className="card-like" post_id={post.id} />
									<div className="posterUsernameAndContent">
									<h4 className="poster-username">{post.username} </h4>
										<h4 className="post-content">{post.content}</h4>
										</div>
								</div>
								{/* <Likes className="card-like" post_id={post.id} /> */}

								<div className="comments-div">
									<CommentsForm post_id={post.id} />
								</div>
							</div>
						</Card>
					);
				})}
			</Container>
		</>
	);
}
