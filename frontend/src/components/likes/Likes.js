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
	const likeText = () => {
		if (likes.length > 1) {
			return "likes"
		} else {
			return "like"
		}
	}

	return (
		<>
			<div className="likesDiv">
				<IconButton
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					className="iconHeart"
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
					{/* <h5 color="black" className="likesLength">{likes.length}</h5> */}
				</IconButton>
				<h5 color="black" className="likesLength">
					{likes.length} {likeText()}
				</h5>
			</div>
		</>
	);
}
