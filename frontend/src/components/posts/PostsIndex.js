import React from "react";

export default function PostsIndex({ posts }) {
	console.log(posts);
	return (
		<div>
			<h1>Users Posts</h1>
				{posts.map((post) => {
					return(
						<>
					<ul key={post.id}>
					<li>{post.picture}</li>
					<li>{post.content}</li>
					<li>{post.full_name}</li>
					<li>{post.profile_pic}</li>
			</ul>
							
						</>
					)
				})}
		</div>
	);
}
