import React from "react";

export default function PostsIndex({ posts }) {
	return (
		<div>
			<h1>Users Posts</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.body}</li>
				))}
			</ul>
		</div>
	);
}
