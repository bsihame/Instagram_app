import React, { useContext, useState, useEffect } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import SignUpForm from "./components/login_signup/SignUp";
import Posts from "./components/posts/Posts";
// import UsersIndex from "./components/users/UsersIndex";
// import UserPage from "./components/pages/UserPage";
import UserProfile from "./components/pages/UserProfile";
import NavBar from "./components/navbar_footer/NavBar";
import Footer from "./components/navbar_footer/Footer";
// import UserPage from "./components/pages/UserPage";
import AuthProvider from "./providers/AuthContext";
import { AuthRoute, ProtectedRoute } from "./util/routesUtil";
// import UserBio from "./components/users/UserBio";
import User from "./components/users/User";
import Ads from "./components/ad/Ads";
import Users from "./components/users/Users";
import CreatePostForm from "./components/posts/CreatePostForm";
import UploadPostImage from "./components/posts/UploadPostImage";
import CommentsForm from "./components/comments/CommentsForm";
import { AuthContext } from "./providers/AuthContext";
import { getUserById } from "./util/getRequests";
import UserPageEdit from "./components/users/UserPageEdit";
import Explore from "./components/pages/Explore";
import UserPost from "./components/posts/UserPost";
import Messages from "./components/pages/Messages";


function App() {
	const [username, setUserName] = useState("");
	const { currentUser } = useContext(AuthContext);
	const getUserName = async () => {
		const data = await getUserById(currentUser.id);
		setUserName(data.username);
	};

	useEffect(() => {
		if (currentUser) {
			getUserName();
		}
	}, [username]);

	return (
		<div className="App">
			<AuthProvider>
				<AuthRoute exact path="/">
					<Home />
				</AuthRoute>

				<AuthRoute exact path="/accounts/emailsignup/">
					<SignUpForm />
				</AuthRoute>

				<ProtectedRoute exact path={`/${username}`}>
					<User />
					<Ads />
					<Footer />
				</ProtectedRoute>

				<ProtectedRoute exact path={`/${username}/profile`}>
					<NavBar />
					<UserProfile />
				</ProtectedRoute>

				<ProtectedRoute exact path={`/${username}/edit`}>
					<NavBar />
					<UserPageEdit />
				</ProtectedRoute>

				<ProtectedRoute path="/posts">
					<NavBar />
					<Posts />
				</ProtectedRoute>

				<ProtectedRoute path="/post/:id">
					<NavBar />
					<UserPost />
				</ProtectedRoute>

				<ProtectedRoute exact path={`/${username}/createPost`}>
					<NavBar />
					<CreatePostForm />
					<Footer />
				</ProtectedRoute>

				<ProtectedRoute path="/explore">
					<NavBar />
					<Explore />
					<Footer />
				</ProtectedRoute>

				<ProtectedRoute path={"/direct/inbox"}>
					<NavBar />
					<h2>direct message</h2>
					{/* <Messages /> */}
					<Footer />
				</ProtectedRoute>
			</AuthProvider>
		</div>
	);
}

export default App;  
