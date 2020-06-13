import React from "react";
import { Row, Image } from "react-bootstrap";

export default function UserProfile() {
	return (
		<>
			<h2>User profile</h2>
			<Row className="show-grid text-center">
				<Image
					src="assets/cake-wedding-love-19640.jpg"
					circle
					className="profile-pic"
				/>
			</Row>
		</>
	);
}
