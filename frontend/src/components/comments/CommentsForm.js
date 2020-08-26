import React, { useState, useContext, useEffect } from "react";
import { apiURL } from "../../util/apiURL";
import { AuthContext } from "../../providers/AuthContext";
import { createComments, getCommentsByPostId } from "../../util/getRequests";
import "../../CSS/CommentsForm.css";

export default function CommentsForm({ post_id }) {
	const API = apiURL();
	const { currentUser } = useContext(AuthContext);
	let id = currentUser.id;
	const [comments, setComments] = useState([]);
	const [content, setContent] = useState("");
	const [short, setShort] = useState(true);
	const [shortComments, setShortComments] = useState([]);

	const getComments = async () => {
		const res = await getCommentsByPostId(post_id);
		if (res) {
			let com = res.data.payload;
			setComments(com);

			if (com.length > 3) {
				let small = [];
				for (let i = 0; i < 3; i++) {
					small.push(com[i]);
				}
				setShortComments(small);
			} else {
				setShortComments(com);
			}
		}
	};

	useEffect(() => {
		getComments();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		let dataObj = {
			post_id,
			poster_id: id,
			content,
		};

		try {
			const res = await createComments(dataObj);
			if (res) {
				getComments();
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<h2>This is create comments Form</h2>
			<div className="createComments">
				<form onSubmit={handleSubmit} className="displayComment">
					<input
						type="text"
						name="comments"
						value={content}
						onChange={(e) => setContent(e.currentTarget.value)}
					/>
					<button type="submit">Post</button>
				</form>
			</div>

			{short ? (
				<>
					{" "}
					{shortComments.map((comment) => {
						return (
							<li key={comment.id} className="displayComments">
								{comment.content}
							</li>
						);
					})}
					<button onClick={() => setShort(false)}>+</button>
				</>
			) : (
				comments.map((comment) => {
					return (
						<li key={comment.id} className="displayComments">
							{comment.content}
						</li>
					);
				})
			)}
		</>
	);
}
