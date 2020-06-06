import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login_signup/Login";
import Home from "./components/pages/Home"
import SignUpForm from "./components/login_signup/SignUp";
import UsersProfile from "./components/users/UsersProfile";
import DisplayUsers from "./components/users/DisplayUsers"
import User from "./components/users/User";
import AuthProvider from "./providers/AuthContext";
import { AuthRoute, ProtectedRoute } from "./util/routesUtil"

function App() {
	return (
		<div className="App">
			<AuthProvider>
				
			{/* <AuthRoute exact path="/">
				<Login />
			</AuthRoute> */}
				
				<AuthRoute exact path="/">
				<Home />
			</AuthRoute>

			<AuthRoute path="/accounts/emailsignup/">
				<SignUpForm />
			</AuthRoute>

			<ProtectedRoute path="/users">
				<UsersProfile />
				</ProtectedRoute>
				
			<Route path="/user">
				<User />
			</Route>
				
			</AuthProvider>
		</div>
	);
}

export default App;
