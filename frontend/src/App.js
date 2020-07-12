import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import SignUpForm from "./components/login_signup/SignUp";
import Posts from "./components/posts/Posts";
import UsersIndex from "./components/users/UsersIndex";
// import UserPage from "./components/pages/UserPage";
import UserProfile from "./components/pages/UserProfile";
import NavBar from "./components/navbar_footer/NavBar";
import Footer from "./components/navbar_footer/Footer";
import UserPage from "./components/pages/UserPage";
import AuthProvider from "./providers/AuthContext";
import { AuthRoute, ProtectedRoute } from "./util/routesUtil";
import UserBio from "./components/users/UserBio";
function App() {
	return (
		<div className="App">
		
			<AuthProvider>
				
				<AuthRoute exact path="/">
					<Home />
				</AuthRoute>

				<AuthRoute exact path="/accounts/emailsignup/">
					<SignUpForm />
				</AuthRoute>

				<ProtectedRoute exact path="/userProfile">
					<NavBar />
					<UserPage />
				</ProtectedRoute>

				<ProtectedRoute path="/user">
					<NavBar />
					<UserBio/>
					<UsersIndex />
					<Footer />
				</ProtectedRoute>
				<ProtectedRoute path="/posts">
					<Posts/>
				</ProtectedRoute>

			</AuthProvider>

			{/* <AuthRoute exact path="user/userProfile">
					<UserPage />
				</AuthRoute> */}
			{/* <AuthRoute exact path="/userProfile">
					<UserPage/>
				</AuthRoute> */}

			{/* <UserProfile/> */}
		</div>
	);
}

export default App;
