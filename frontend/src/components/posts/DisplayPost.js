import { useEffect } from "react";
import React, { UseState, useEffect } from "react";
import { AuthContext } from "../../providers/AuthContext";
import {
	getPostByPostId,
	getUserById,
	getUsersPosts,
} from "../../util/getRequests";

export default function DisplayPost() {
	const { currentUser, token } = useContext(AuthContext);
	const [post, setPost] = useState([]);
	const [error, setError] = useState(null);
	let poster_id = currentUser.id;
	console.log(poster_id);
	const getUserPost = async () => {
		const res = await getPostByPostId(poster_id, token);
		debugger;

		setPost(res);
		try {
			if (res) {
				setPost(res);
				setError(null);
			}
		} catch (error) {
			console.log(error);
			setError(error.message);
			setPost([]);
		}
	};

	useEffect(() => {
		getUserPost();
	}, []);
	return (
		<div>
			{post.map((post) => {
				return (
					<>
						<ul key={post.id}>
							<img src={post.picture} alt="user_Post" />
							<li>{post.content}</li>
							<li>{new Date(post.created_at).toLocaleString()}</li>
						</ul>
					</>
				);
			})}
		</div>
	);
}
