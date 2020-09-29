import React, { useState, useContext, useEffect } from "react";
import { getLikeCommentByPostId, createLikes } from "../../util/getRequests";
import { IconButton } from "@material-ui/core";
import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";
import { AuthContext } from "../../providers/AuthContext";
import "../../CSS/Likes.css"

export default function Likes({ post_id }) {
	const { currentUser } = useContext(AuthContext);
	let liker_id = currentUser.id;
	const [likes, setLikes] = useState([]);
	const [isLiked, seIsLiked] = useState(false);

	const getLikes = async () => {
		try {
			const res = await getLikeCommentByPostId(post_id);
			setLikes(res);
			seIsLiked(res.some((like) => like.liker_id === currentUser.id));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getLikes();
	}, []);

	const handleLike = async () => {
		let dataObj = {
			liker_id,
			post_id,
		};

		try {
			const res = await createLikes(dataObj);
			if (res) {
				getLikes();
			}
		} catch (error) {
			console.log(error);
		}
	};
	
	const loveIt = () => {
		if (loveIt) return;
	};

	return (
		<>
			<div>
				<IconButton
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					className="icon"
				>
					{isLiked ? (
						<Icon
							name="heart"
							fontSize="medium"
							onClick={handleLike}
							color="red"
							className="loveIt"
						/>
					) : (
						<Icon
							name="heart"
							fontSize="medium"
							onClick={handleLike}
							className="disliked"
						/>
					)}
					<h5 color="black" className="likesLength">{likes.length}</h5>
				</IconButton>
			</div>
		</>
	);
}
