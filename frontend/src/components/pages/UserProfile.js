import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import NavBar from "../navbar_footer/NavBar";

export default function UserProfile() {
	return (
		<>
		
			<h2>User profile</h2>
			<h2>This Page Is UserProfile.js</h2>
			<Row className="show-grid text-center">
			<Col xs={12} sm={4} className="imageWrapper">
						<Image
							src="assets/sihame.jpg"
							className="profile-pic"
						/>
			</Col>
			</Row>
		</>
	);
}

