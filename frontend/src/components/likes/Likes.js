import React, { useState, useContext, useEffect } from "react";
import { getLikeCommentByPostId, createLikes } from "../../util/getRequests";
import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";
import { makeStyles } from '@material-ui/core/styles';
import { action } from '@material-ui/core/colors';
import FavoriteIcon from "@material-ui/icons/Favorite";
// import { createLikes } from "../../util/getRequests"
import { apiURL } from "../../util/apiURL";
import { AuthContext } from "../../providers/AuthContext";
import {heartIcon} from "../../images/heart.png"

export default function Likes({ post_id }) {
	const API = apiURL();
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

	// const likeIcon = async (e) => {
	//   if (e.target.innerText === "Like") {
	//     e.target.innerText = "Unlike";
	//     try {
	//       const res = await getLikes();
	//       getLikes()
	//     } catch (error) {
	//       console.log(error)
	//     }
	//   } else {
	//     e.target.innerText = "Like";

	//   }
	// }
	// const likedArray = (arr) => {
	//   return arr.every(liked => {
	//      return liked.length
	//   })
	// }

	// useEffect(() => {
	//   getLikes()
	// }, []);
	return (
		<>
			<div>
				{/* <FavoriteBorderIcon fontSize="large" onClick={handleLike} /> */}

				<IconButton
				// aria-label="account of current user"
				// aria-controls="primary-search-account-menu"
				// aria-haspopup="true"
				// color="inherit"
				>
					<Icon name="heart" 
						// fontSize="medium"
						onClick={handleLike}
						className={isLiked ? "loveIt" : "disliked"}
					/>
					<h5>{likes.length}</h5>
				</IconButton>
			</div>
		</>
	);
				
			}
			
			{/* <h2 onClick={handleLike}><img src="heartIcon" alt="heartIcon"/> : {likes.length}</h2>  */}