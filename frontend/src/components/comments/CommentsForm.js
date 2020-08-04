import React, { useState, useContext, useEffect } from "react";
import { apiURL } from "../../util/apiURL";
import { AuthContext } from '../../providers/AuthContext';
import { createComments } from "../../util/getRequests";

export default function CommentsForm(post_id) {
	const API = apiURL()
	const { currentUser } = useContext(AuthContext);
	let id = currentUser.id
	const [comments, setComments] = useState("");
	
	const handleSubmit = async (e) => {
		e.preventDefault();

		let dataObj = {
      post_id,
			poster_id: id,
      content,
      created_at,
		}
		
    try {
			const res = await createComments(dataObj);
			debugger
			setComments(res.data)
		} catch (error) {
			console.log(error)
		}
		
	}
	

	return (
		<>
			<h2>This is create comments Form</h2>
			<div className="createComments">
				<form onSubmit={handleSubmit} className="displayComment">
					<input type="text" name="comments" value={comments} onChange={(e) =>setComments(e.currentTarget.value)} />
				<button type="submit">Post</button>
				</form>
			</div>
		</>
	);
}
