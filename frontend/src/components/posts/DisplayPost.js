import React, { useState, useEffect, useContext } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import "../../CSS/DisplayPost.css";

import { AuthContext } from "../../providers/AuthContext";
import { getPostByPostId } from "../../util/getRequests";

export default function DisplayPost() {
	const { currentUser, token } = useContext(AuthContext);
	const [post, setPost] = useState([]);
	let id = currentUser.id;
	const [error, setError] = useState(null);
	let poster_id = id;
	console.log(poster_id);
	const getUserPost = async () => {
		const res = await getPostByPostId(poster_id, token);
		setPost(res);
		try {
			if (res) {
				setPost(res);
				setError(null);
			}
		} catch (error) {
			console.log(error);
			setError(error.message);
			setPost([]);
		}
	};

	useEffect(() => {
		getUserPost();
	}, []);

	return (
		<div className="displayPostDiv">
			<GridList className="gridList">
				{post.map((post) => {
					return (
						<GridListTile key={post.picture} className="GridListTile">
							<>
								<ul key={post.id} className="displayPost">
									<img
										src={post.picture}
										alt="user_Post"
										className="displayPicturesPost"
									/>
								</ul>
							</>
						</GridListTile>
					);
				})}
			</GridList>
		</div>
	);
}
