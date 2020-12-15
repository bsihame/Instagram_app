import React, { useState, useContext, useEffect } from "react";
import { apiURL } from "../../util/apiURL";
import { AuthContext } from "../../providers/AuthContext";
import { createComments, getCommentsByPostId } from "../../util/getRequests";
import Divider from "@material-ui/core/Divider";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";

import "../../CSS/CommentsForm.css";

export default function CommentsForm({ post_id }) {
	const API = apiURL();
	const { currentUser } = useContext(AuthContext);
	let id = currentUser.id;
	const [comments, setComments] = useState([]);
	const [content, setContent] = useState("");
	const [short, setShort] = useState(true);
	const [shortComments, setShortComments] = useState([]);
	const useStyles = makeStyles((theme) => ({
		root: {
			padding: "2px 4px",
			display: "flex",
			alignItems: "center",
		},
		input: {
			marginLeft: theme.spacing(1),
			flex: 1,
			fontFamily: "inherit",
			fontSize: "initial",
		},
		iconButton: {
			padding: 10,	
		},
	}));
	const classes = useStyles();

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
			<Divider className={classes.divider} orientation="horizontal" />
			<form onSubmit={handleSubmit} className="display-comments-form">
				<div component="form" className={classes.root}>
					<InputBase
						className={classes.input}
						placeholder="Add a comment…"
						type="text"
						name="comments"
						value={content}
						onChange={(e) => setContent(e.currentTarget.value)}
					/>
					<IconButton
						className={classes.iconButton}
						id="comment-button"
						type="submit"
					>
						Post
					</IconButton>
				</div>
			</form>
		</>
	);
}
