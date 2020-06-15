import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import SignUpForm from "./components/login_signup/SignUp";
import Posts from "./components/posts/Posts";
import UsersIndex from "./components/users/UsersIndex";
import UserProfile from "./components/pages/UserProfile";
import NavBar from "./components/navbar_footer/NavBar";
import Footer from "./components/navbar_footer/Footer";
import UserPage from "./components/pages/UserPage";
import AuthProvider from "./providers/AuthContext";
import { AuthRoute, ProtectedRoute } from "./util/routesUtil";
function App() {
	return (
		<div className="App">
			<AuthProvider>
				<AuthRoute exact path="user/userProfile">
					<UserPage />
				</AuthRoute>
				<AuthRoute exact path="/">
					<Home />
				</AuthRoute>
				<AuthRoute exact path="/accounts/emailsignup/">
					<SignUpForm />
				</AuthRoute>
				<ProtectedRoute path="/user">
					<NavBar />
					<UsersIndex />
					<Footer />
				</ProtectedRoute>
				<AuthRoute path="/userProfile">
					<UserPage />
				</AuthRoute>
			</AuthProvider>
		</div>
	);
}

export default App;
