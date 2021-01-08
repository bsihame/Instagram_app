import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom"
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { makeStyles } from "@material-ui/core/styles";
import "../../CSS/PostsGallery.css";
import { getPostsByUserName } from "../../util/getRequests";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import PostCarousel from "./PostCarousel";


const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper,
	},

	title: {
		flexGrow: 1,
	},
	gridList: {
		width: 1000,
		height: 1000,
	},
}));
export default function PostsGallery() {
	const { username } = useParams();
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState(null);
	const history = useHistory();
	const classes = useStyles();

	const getUserPosts = async () => {
		try {
			const res = await getPostsByUserName(username);
			setPosts(res);
			if (res) {
				setPosts(res);
				setError(null);
			}
		} catch (error) {
			console.log(error);
			setError(error.message);
			setPosts([]);
		}
	};
	
	// const imageClick = () => {
	// 	debugger
		
	// 	// history.push(`p/${username}`);
	// 	return
	// 	 <PostCarousel />;
		
	// };         

	useEffect(() => {
		getUserPosts();
	}, []);

	return (
		<div id="PostsGalleryDiv" className={classes.root}>
			<GridList
				id="gridList"
				cols={3}
				cellHeight={300}
				spacing={30}
				className={classes.GridList}
			>
				{posts.map((post) => {
					return (
						<GridListTile
							key={post.picture}
							id="GridListTile"
							// onClick={imageClick()}
						>
							<img
								key={post.id}
								src={post.picture}
								alt="user_Post"
								className="displayPicturesPost"
								// onClick={imageClick(post.id)}
							/>
						</GridListTile>
					);
				})}
			</GridList>
		</div>
	);
}
