// import React, { useState, useEffect, useContext } from "react";
// import { useHistory } from "react-router-dom";
// import NavBar from "../navbar_footer/NavBar";
// import { Row, Image, Col, Navbar } from "react-bootstrap";
// // import Posts from "../posts/Posts"
// import Footer from "../navbar_footer/Footer";
// // import UsersIndex from "../users/UsersIndex";
// import { apiURL } from "../../util/apiURL";
// import { AuthContext } from "../../providers/AuthContext";


// import axios from "axios";
// import UserProfile from "./UserProfile";

// export default function UserPage({ user }) {
// 	// export default function UserPage({user}) {

// 	// 	const [posts, setPosts] = useState([])
// 	// 	const [id, setUserId] = useState("")
// 	// 	const [users, setUsers] = useState([]);
// 	// 	const [fullName, setFullName] = useState("");
// 	// 	const [userName, setUserName] = useState("");
// 	// 	const [bio, setBio] = useState("");
// 	// 	// const [profilePic, setProfilePic] = useState("");
// 	// 	// const history = useHistory();
// 	// 	const { token, currentUser } = useContext(AuthContext);
// 	// 	// id, full_name, email, username, bio, profile_pic
// 	// 	const API = apiURL();
// 	// 	let user_id = currentUser.uid
// 	// 	useEffect(() =>{
// 	// 	const createPosts = async () => {
// 	// 		let res = await axios({
// 	// 			method: "get",
// 	// 			url: `${API}/api/posts/${user_id}`,
// 	// 			headers: {
// 	// 				"AuthToken": token
// 	// 			}
// 	// 		})
// 	// 		debugger
// 	// 		setPosts(res.data.payload)
// 	// 		console.log(res.data)
// 	// 	}
// 	// 	createPosts();
// 	// 	}, [API])
// 	// 	// handleChange = (e) => {

// 	// 	// }
// 	// // const showPosts = posts.map((post) => {
// 	// // 	return (
// 	// // 		<div>
			
// 	// // 		</div>)
// 	// // })
// 	// 	// useEffect(() => {
// 	// 	// 	const userInfo = async () => { 
// 	// 	// 		try {
// 	// 	// 			let res = await axios({
// 	// 	// 				method: "get",
// 	// 	// 				url: `${API}/api/users/${currentUser.uid}`,
// 	// 	// 				// url: `${API}/users/${currentUser.uid}`,

// 	// 	// 				headers: {
// 	// 	// 					AuthToken: token,
// 	// 	// 				},
// 	// 	// 			});
// 	// 	// 			debugger;

// 	// 	// 			// setUserId(res.data.singleUser.id);
// 	// 	// 			// setUsers(res.data.singleUser);
// 	// 	// 			// setFullName(res.data.singleUser.full_name);
// 	// 	// 			// setUserName(res.data.singleUser.username);
// 	// 	// 			// setBio(res.data.singleUser.bio);
// 	// 	// 		} catch (error) {
// 	// 	// 			console.log(error);
// 	// 	// 		}
// 	// 	// 		// )

// 	// 	// 		// history.push("/users");
// 	// 	// 		// setUsers(res.data.payload);
// 	// 	// 		// console.log(res.data.payload.username)
// 	// 	// 	};
// 	// 	// 	userInfo();
// 	// 	// }, []);
// 	// 	// users.map((user) => {
// 	// 	// 	debugger;
// 	// 	// 	return (
// 	// 	// 		<ul key={user.id}>
// 	// 	// 			<li>{user.id}</li>
// 	// 	// 			<li>{user.full_name}</li>
// 	// 	// 			<li>{user.username}</li>
// 	// 	// 			<li>{user.bio}</li>
// 	// 	// 			<li>{user.profile_pic}</li>
// 	// 	// 		</ul>
// 	// 	// );
// 	// 	// });

// 	// 	return (
// 	// 		<>
// 	// 			<div>
// 	// 				<NavBar />
// 	// 			</div>

// 	// 			<h2>UserPage</h2>
			
// 	// 			<div>
// 	// 				<Row className="show-grid text-center">
// 	// 					<Col xs={12} sm={4} className="imageWrapper">
// 	// 						<Image
// 	// 							src="assets/sihame.jpg"
// 	// 							className="profile-pic"
// 	// 						/>
// 	// 					</Col>
// 	// 				</Row>
// 	// 			</div>
// 	// 			{/* <div> {post.username}</div>
// 	//            {/* imageUrl={API + post.pictures} */}
// 	// 					 {/* <div>{post.content}</div> */} 
// 	// 			<div>
// 	// 				Bio  
// 	// 				<input
// 	// 				// onchange={handleChange} 
// 	// 				/>
// 	// 				<h2>right div</h2>

// 	// 				<h2> User Pictures and username</h2>


// 	// 				<div>help prevent corona</div>
// 	// 				{/* <div className="gallery-image">{showPosts}</div> 
             

// 	// 				{/* <Posts /> */}
// 	// 			</div>

// 	// 			<div>
// 	// 				<h2>left div</h2>

// 	// 				<h2>current user with username</h2>

// 	// 				<h2>suggestion users div with username</h2>

// 	// 				<div>
// 	// 					<Footer />
// 	// 				</div>
// 	// 			</div>
// 	// 		</>
// 	// 	);
// 	// }
// 	return (
// 		<>
// 				<Navbar/>
// 			<div>
// 				<h2>this is UserPage and UserProfile</h2>
// 				</div>
// 			<UserProfile/>
// 		</>

// 	)
// }
