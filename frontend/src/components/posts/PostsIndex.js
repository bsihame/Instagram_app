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
			debugger
			setUser(res)
			debugger
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
								<div>
									<h2>{user.username}</h2>
									<img
										className="userAvatar"
										src={user.profile_pic}
										alt="user_picture"
									/>
								</div>
								<img
									className="card-img-top"
									src={post.picture}
									alt="Card image cap"
								/>
								<p>{post.content}</p>
								<div class="card-body">
									<h5 class="card-title">Card title</h5>
									<div class="card-text">
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
