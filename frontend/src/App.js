import React, { Component } from 'react';
// import { Route, NavLink} from "react-router-dom";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./components/pages/Home"
import SignUpForm from "./components/login_signup/SignUp";
// import posts from "./components/posts/Posts";
import UsersIndex from "./components/users/UsersIndex";
import UserProfile from "./components/pages/UserProfile";
import NavBar from "./components/navbar_footer/NavBar"
import Footer from "./components/navbar_footer/Footer";
import Profile from "./profileList/Profile";
import Setting from "./profileList/Setting";
import Saved from "./profileList/Saved"
import { Layout } from "./components/Layout";

// import User from "./components/users/User";
import AuthProvider from "./providers/AuthContext";
import { AuthRoute, ProtectedRoute } from "./util/routesUtil"

function App() {
	return (
		<div className="App">
			<AuthProvider>
				
			{/* <AuthRoute exact path="/">
				<UserPage />
			</AuthRoute>  */}
				
			<AuthRoute exact path="/">
					<Home />	
			</AuthRoute>

			<AuthRoute exact path="/accounts/emailsignup/">
				<SignUpForm />
			</AuthRoute>

				{/* <ProtectedRoute path="/users"> */}

				<ProtectedRoute path="/user">
					<NavBar/>
					<UsersIndex />
					<Footer/>
				</ProtectedRoute>
				 
				{/* <Route path="/user">
			
				<User />
				</Route> */}

				<AuthRoute path="/user/userProfile">
				<UserProfile />
				</AuthRoute>
				
						<Layout>
						<Router>
						<Switch>
							<Route exact path="/profile" component={Profile} />
              <Route path="/saved" component={Saved} />
              <Route path="/setting" component={Setting} />
							</Switch>
					</Router>
					</Layout>

				
				
				{/* <Route path="/user">
				<Upload />
				</Route> */}
				
				{/* <Route path="/user">
				<Post/>
			</Route> */}
				
			</AuthProvider>
		</div>
	);
}

export default App;
