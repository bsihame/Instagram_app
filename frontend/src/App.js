import React from "react";
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
import UserBio from "./components/users/UserBio";
import User from "./components/users/User";
import Ads from "./components/ad/Ads";
import Users from "./components/users/Users";
import CreatePostForm from "./components/posts/CreatePostForm";
import UploadPostImage from "./components/posts/UploadPostImage";
import CommentsForm from "./components/comments/CommentsForm";



// import ProfilePic from "./components/upload/ProfilePic"
// import { useHistory } from "react-router-dom";

function App() {
	// const [loggedUser, setLoggedUser] = useState({});
	// const history = useHistory();
	
	return (
		<div className="App">
			<AuthProvider>
				<AuthRoute exact path="/" >
					<Home  />
				</AuthRoute>

				<AuthRoute
					exact
					path="/accounts/emailsignup/"
				
				>
					<SignUpForm />
				</AuthRoute>

				<ProtectedRoute exact path="/userProfile/:id" >
					{/* <NavBar /> */}
					{/* <User/> */}
					{/* <UserPage /> */}
					{/* <UserProfile/> */}
				</ProtectedRoute>

				<ProtectedRoute path="/user">
					<User />
					{/* <ProfilePic /> */}
					<Ads/>
					<Footer />
				</ProtectedRoute>
				
				<ProtectedRoute path="/posts"  >
					<Posts  />
				</ProtectedRoute>
			
				<ProtectedRoute path="/createPost"  >
					<NavBar />
					<CreatePostForm />
					<Footer />
				</ProtectedRoute>

				<ProtectedRoute path="/createComments"  >
					<NavBar />
					<CommentsForm />
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
