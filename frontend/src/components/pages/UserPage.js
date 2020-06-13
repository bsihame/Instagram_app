import React from "react";
import NavBar from "../navbar_footer/NavBar";
import { Row, Image, Col } from "react-bootstrap";
// import Posts from "../posts/Posts"
import Footer from "../navbar_footer/Footer";
export default function UserPage() {
	return (
		<>
			<div>
				<NavBar />
			</div>

			<h2>UserPage</h2>
			<h2>Username</h2>
			<div>
				<Row className="show-grid text-center">
					<Col xs={12} sm={4} className="imageWrapper">
						<Image
							src="assets/cake-wedding-love-19640.jpg"
							circle
							className="profile-pic"
						/>
					</Col>
				</Row>
			</div>

			<div>
				<h2>right div</h2>

				<h2> User Pictures and username</h2>

				<div>help prevent corona</div>

				{/* <Posts /> */}
			</div>

			<div>
				<h2>left div</h2>

				<h2>current user with username</h2>

				<h2>suggestion users div with username</h2>

				<div>
					<Footer />
				</div>
			</div>
		</>
	);
}
