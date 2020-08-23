import React from "react";
import CommentsForm from "../comments/CommentsForm";

import Likes from "../../components/likes/Likes";

export default function PostsIndex({ posts }) {
	console.log(posts);
	return (
		<div>
			<div>
				{posts.map((post) => {
					return (
						<div key={post.id}>
							<ul >
								<img  src={post.picture} alt="user_Post" />
								<li>{post.content}</li>
							</ul>
							<CommentsForm post_id={post.id} />
							<Likes />
						</div>
					);
				})}
			</div>
		</div>
	);
}