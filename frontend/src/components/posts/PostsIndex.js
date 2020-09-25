import React, { useEffect, useState, useContext } from "react";
import CommentsForm from "../comments/CommentsForm";
import { AuthContext } from "../../providers/AuthContext";
import Likes from "../../components/likes/Likes";
import { getUserById } from "../../util/getRequests";

export default function PostsIndex({ posts }) {
	const [user, setUser] = useState("");
	const { currentUser } = useContext(AuthContext);
	let id = currentUser.id;

	const getSingleUser = async () => {
		try {
			const res = await getUserById(id);
			setUser(res)
		} catch (error) {
			console.log("ISSUE");
			console.log(error);
		}
	};

	useEffect(() => {
		getSingleUser();
	}, []);

	return (
		<>
			<div>
				<div>
					{posts.map((post) => {
						return (
							<div class="card mb-3" key={post.id}>
								<div className="userHeader">
									<img
										className="userAvatar"
										src={posts.profile_pic}
										alt="user_picture"
										className="userProfile"
									/>
									<h2>{posts.username}</h2>
								</div>
								<img
									className="card-img-top"
									src={post.picture}
									alt="Card image cap"
								/>
								<p>{post.content}</p>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<div className="card-text">
										<Likes post_id={post.id} />
									</div>
									<CommentsForm post_id={post.id} />
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
