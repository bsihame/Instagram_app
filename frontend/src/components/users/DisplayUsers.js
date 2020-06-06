import React, { useState, useEffect } from "react";
import { apiURL } from "../../util/apiURL";
import axios from "axios";

export default function DisplayUsers() {
	const [users, setUsers] = useState([]);
	const API = apiURL();

	useEffect(() => {
		let usersInfo = async () => {
			let res = await axios({
				method: "get",
				url: `${API}/api/users`,
			});

			setUsers(res.data.payload);
		};

		usersInfo();
	}, []);

	let allUsers = users.map((user) => {
		debugger;
		return (
			<ul key={user.id}>
				<li>user.id</li>
				<li>user.full_name</li>
				<li>user.username</li>
				<li>user.bio</li>
				<li>user.profile_pic</li>
			</ul>
		);
	});
	return <div>{allUsers}</div>;
}
