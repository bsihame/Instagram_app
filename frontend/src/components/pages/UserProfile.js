// import React, { useState } from "react";
// import axios from "axios";
// import { apiURL } from "../../util/apiURL"
// import { Col, Row, Image, Navbar } from "react-bootstrap";
// import profileIcon from "../../images/profile-icon-300x300.png"

// export default function UserProfile({ updateBio}) {
// 	const [bio, setBio] = useState("");
// 			const API = apiURL();
// 			const handleSubmit = async (e) => {
// 					e.preventDefault();
// 					await axios({
// 							method: 'post',
// 							url: `${API}/api/bio`, 
// 							data: {
// 									bio, 
// 							}
// 					})
// 					setBio("");
// 				updateBio();
// 				console.log(bio)
// 			}
	
	
// 	return (
// 		<>
	
// 			<div>
// 			<form onSubmit={handleSubmit}>
// 							<textarea value={bio} onChange={(e) => setBio(e.target.value)}/>
// 							<button type="submit">Add Bio</button>
// 				</form>
// 				</div>
// 			</>
// 			)
// 	// };

// 	// return (
// 	// 	<>
// 	// 	 <Navbar/>
// 	// 		<h2>Picture</h2>
// 	// 		<h2>This Page Is UserProfile.js</h2>
// 	// 		<Row className="show-grid text-center">
// 	// 		<Col xs={12} sm={4} className="imageWrapper">
// 	// 					<Image
// 	// 						src="assets/sihame.jpg"
// 	// 						className="profile-pic"
// 	// 					/>
// 	// 		</Col>
// 	// 		</Row>
// 	// 	</>
// 	// );
// }

