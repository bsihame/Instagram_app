import React, { useState, useEffect, useContext } from "react";
// import React, { useState, useEffect } from "react";

import { apiURL } from "../../util/apiURL";
import UsersList from "./UsersList";
import { AuthContext } from "../../providers/AuthContext";
import Posts from "../posts/Posts";
import axios from "axios";

import "../../CSS/UsersIndex.css";
import healthIcon from "../../images/healthIcon.png";
import Logout from "../login_signup/Logout";

export default function UsersIndex({ loggedUser }) {
	const [users, setUsers] = useState([]);
	const API = apiURL();
	const { token } = useContext(AuthContext);

	useEffect(() => {
		const getAllUsers = async () => {
			let res = await axios({
				method: "get",
				url: `${API}/api/users`,
				headers: {
					AuthToken: token,
				},
			});

			console.log(res.data);
			// setUsers(res.data.payload);
		};

		getAllUsers();
	}, []);

	return (
		<>
			{/* <div>
				<Logout />
			</div> */}
			<div className=" allUsersContainerIndex">
				<div className="leftDivUsersIndex">
					<h1>All users if logged in</h1>
					<Posts loggedUser={loggedUser} />
					<div className="otherUsersIndex">
						<p>display Other users </p>
						<h2>Need All users pictures profile and username</h2>
					</div>

					<div className="healthInsuranceLink">
						<img src={healthIcon} alt="healthIcon" className="healthIcon"></img>
						<h4>Health Insurance May Be Available </h4>
						<h4 className="insuranceInfo">
							Millions have recently lost their jobs and health insurance. If
							you or someone you know is looking for coverage, visit
							healthcare.gov to see who’s eligible.
						</h4>
						<div className="linkBtn">
							<a
								className="healthInsuranceLinkAn"
								href={"https://www.healthcare.gov/"}
								target="_blank"
								rel="noopener noreferrer"
							>
								Go to healthcare.gov
							</a>
						</div>
					</div>

					<div className="allUsersIndex">
						<h2>Display Posts of Users</h2>
						<ul>
							{users.map((user) => {
								return <UsersList key={user.id} user={user} />;
							})}
						</ul>
					</div>
				</div>

				<div className=" rightDivUsersIndex">
					<div className="userProfileIndex">
						<h2>User Profile</h2>
					</div>
				</div>
				{/* </div> */}
			</div>
		</>
	);
}
