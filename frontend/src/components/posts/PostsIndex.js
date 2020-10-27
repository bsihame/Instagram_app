import React, { useEffect, useState, useContext } from "react";
import CommentsForm from "../comments/CommentsForm";
import { AuthContext } from "../../providers/AuthContext";
import Likes from "../../components/likes/Likes";
import { getUserById } from "../../util/getRequests";
import Box from "@material-ui/core/Box";
import "../../CSS/PostsIndex.css";
import { Container } from "@material-ui/core";

export default function PostsIndex({ posts }) {
	const [user, setUser] = useState("");
	const { currentUser } = useContext(AuthContext);
	let id = currentUser.id;

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
				justifyContent="center"
				alignItems="center"
				alignContent="center"
			>
				{posts.map((post) => {
					return (
						<Box
							boxShadow={3}
							bgcolor="background.paper"
							m={4}
							p={1}
							display="flex"
							justifyContent="center"
							alignItems="center"
							alignContent="center"
						>
							<div class="card" key={post.id}>
								{/* <div className="userHeader">
								<img
									className="userAvatar"
									src={post.profile_pic}
									alt="user_picture"
									className="userProfile"
								/>
								<h2>{post.username}</h2>
							</div> */}
								<post className="post-feed">
									<img
										className="card-img-top"
										src={post.picture}
										alt="Card image cap"
									/>
									<h4 className="post-content">{post.content}</h4>
									<Likes className="card-like" post_id={post.id} />
								</post>
								<div className="comments-div">
									<CommentsForm post_id={post.id} />
								</div>
							</div>
						</Box>
					);
				})}
			</Container>
		</>
	);
}
