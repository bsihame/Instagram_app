import React, { useState, useContext, useEffect } from "react";
import { apiURL } from "../../util/apiURL";
import { AuthContext } from "../../providers/AuthContext";
import { createComments, getCommentsByPostId } from "../../util/getRequests";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";

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
			setContent("")
			if (res) {
				getComments();

			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{short ? (
				<>
					{" "}
					{shortComments.map((comment) => {
						return (
							<li key={comment.id} className="display-comments">
								{comment.content}
							</li>
						);
					})}
					{/* <button onClick={() => setShort(false)}>+</button> */}
				</>
			) : (
				comments.map((comment) => {
					return (
						<li key={comment.id} className="display-comments-list">
							{comment.content}
						</li>
					);
				})
			)}
			{/* <Card> */}
			<Box border={1} className="create-comments">
				<form onSubmit={handleSubmit} className="display-comments-form">
					<input
						type="text"
						name="comments"
						value={content}
						className="comment-input"
						onChange={(e) => setContent(e.currentTarget.value)}
					/>
					<span>
						<button type="submit" className="comment-button">
							Post
						</button>
					</span>
				</form>
			</Box>
			{/* </Card> */}
		</>
	);
}
