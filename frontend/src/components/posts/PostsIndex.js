import React, {useState, useEffect} from "react";

export default function PostsIndex({ posts }) {
	console.log(posts);
	return (
		<div>
			<h1>Users Posts</h1>
			<div>{posts.map(post => {

					return(
						<>
					<ul key={post.id}>
								<img key={post.id} src={post.picture} alt="user_Post" />
								<li key={post.id}>{post.content}</li>
								{/* <li>{post.created_at}</li> */}
								
					{/* <li>{post.full_name}</li> */}
					{/* <li>{post.profile_pic}</li> */}
					</ul>
							
						</>
					)
				})}
			</div>
		</div>
	);
}
