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
function App() {
	const [firstName, setFirstName] = useState("");
	const { currentUser } = useContext(AuthContext);

	const getFirstName = async () => {
		const data = await getUserById(currentUser.id);
		setFirstName(data.full_name.split(" ")[0]);
	};

	useEffect(() => {
		if (currentUser.id) {
			getFirstName();
		}
	}, [currentUser]);

	return (
		<div className="App">
			<AuthProvider>
				<AuthRoute exact path="/">
					<Home />
				</AuthRoute>

				<AuthRoute exact path="/accounts/emailsignup/">
					<SignUpForm />
				</AuthRoute>

				<ProtectedRoute exact path={`/${firstName}`}>
					<NavBar />
					<UserProfile />
				</ProtectedRoute>

				{/* <ProtectedRoute exact path={`/${firstName}/edit`}>
					<NavBar />
					<UserPageEdit />
				</ProtectedRoute> */}

				<ProtectedRoute path="/user">
					<User />
					<Ads />
					<Footer />
				</ProtectedRoute>

				<ProtectedRoute path="/posts">
					<NavBar />
					<Posts />
				</ProtectedRoute>

				<ProtectedRoute path="/createPost">
					<NavBar />
					<CreatePostForm />

					<Footer />
				</ProtectedRoute>
			</AuthProvider>

			{/* <AuthRoute exact path="user/userProfile" setLoggedUser={setLoggedUser} >
					<UserPage />
				</AuthRoute> */}
			{/* <AuthRoute exact path="/userProfile" setLoggedUser={setLoggedUser} >
					<UserPage/>
				</AuthRoute> */}

			{/* <UserProfile/> */}
		</div>
	);
}

export default App;
