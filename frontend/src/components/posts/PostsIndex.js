import React, { useEffect, useState, useContext } from "react";
import CommentsForm from "../comments/CommentsForm";
import { makeStyles } from '@material-ui/core/styles';
import { AuthContext } from "../../providers/AuthContext";
import Likes from "../../components/likes/Likes";
import { getUserById } from "../../util/getRequests";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
// import IconButton from "@material-ui/core/IconButton";
// import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
// import CardMedia from "@material-ui/core/CardMedia";
// import Box from "@material-ui/core/Box";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "../../CSS/PostsIndex.css";
import { CardHeader, Container,CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 540,
		backgroundColor: theme.palette.background.paper,
	},
}));

const options = [
	"Report",
	"Unfollow",
	"Go to post",
	"Share to...",
	"Copy Link",
	"Embed",
	"Cancel"
];


export default function PostsIndex({ posts }) {
	// console.log(posts)
	const classes = useStyles();
	const [user, setUser] = useState("");
	const { currentUser } = useContext(AuthContext);
	let id = currentUser.id;
	// const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [selectedIndex, setSelectedIndex] = React.useState(1);

	const handleClickListItem = (event) => {
		setAnchorEl(event.currentTarget);
		
	};

	const handleMenuItemClick = (event, index) => {
		setSelectedIndex(index);
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
	const onClick = () => {
	 	return (
			
			<div className={classes.root}>
				<List component="nav" aria-label="Device settings">
					<ListItem
						button
						aria-haspopup="true"
						aria-controls="lock-menu"
						aria-label="when device is locked"
						onClick={handleClickListItem}
					>
						<ListItemText
							primary="When device is locked"
							secondary={options[selectedIndex]}
						/>
					</ListItem>
				</List>
				<Menu
					id="lock-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					{options.map((option, index) => (
						<MenuItem
							key={option}
							disabled={index === 0}
							selected={index === selectedIndex}
							onClick={(event) => handleMenuItemClick(event, index)}
						>
							{option}
						</MenuItem>
					))}
				</Menu>
			</div>
		);

	}

	useEffect(() => {
		getSingleUser();
	}, []);

	return (
		<>
			<Container
				className="post-container"
				display="flex"
				justifyContent="center"
				alignItems="center"
				alignContent="center"
			>
				{posts.map((post) => {
					return (
						// <Box
						// 	// boxShadow={3}
						// 	// bgcolor="background.paper"
						// 	// m={1}
						// 	p={1}
						// 	display="flex"
						// 	justifyContent="center"
						// 	alignItems="center"
						// 	alignContent="center"
						// >
						<Card className={classes.root}>
							<CardHeader
								avatar={
									<Avatar
										aria-label="userAvatar"
										className={classes.avatar}
										src={post.profile_pic}
									></Avatar>
								}
								action={
									<IconButton aria-label="settings">
										<MoreHorizIcon onClick={onClick}/>
										
									</IconButton>
								}
								title={post.username}
							/>
							<CardContent>
								{/* <div className="userHeader"> */}
								{/* <img */}
								{/* // 		className="userAvatar"
								// 		src={post.profile_pic}
								// 		alt="user_picture"
								// 		className="userProfile"
								// 	/>
								// 	<h2>{post.username}</h2>
								// </div> */}
								<div className="card" key={post.id}>
									{/* <post className="post-feed"> */}
									<img
										className="img_post"
										src={post.picture}
										alt="Card image"
									/>
									<h4 className="post-content">{post.content}</h4>
									<Likes className="card-like" post_id={post.id} />
									{/* </post> */}
									<div className="comments-div">
										<CommentsForm post_id={post.id} />
									</div>
								</div>
								{/* </Box> */}
							</CardContent>
						</Card>
					);
				})}
			</Container>
		</>
	);
}
