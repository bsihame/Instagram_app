import React, { useState, useEffect } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import "../../CSS/PostsGallery.css";

import { AuthContext } from "../../providers/AuthContext";
import { getPostsByUserName } from "../../util/getRequests";
import { useParams } from "react-router-dom";

export default function PostsGallery() {
	const { username } = useParams();
	// const history = useHistory();
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState(null);

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

	useEffect(() => {
		getUserPosts();
	}, []);

	return (
		<div className="PostsGalleryDiv">
			<GridList className="gridList" cols={3}>
				{posts.map((post) => {
					return (
						<GridListTile key={post.picture} className="GridListTile">
							
								<img
									key={post.id}
									// className="PostsGallery"
									src={post.picture}
									alt="user_Post"
									className="displayPicturesPost"
								/>
						
						</GridListTile>
					);
				})}
			</GridList>
		</div>
	);
}
