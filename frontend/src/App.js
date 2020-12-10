import React, { useContext, useState, useEffect } from "react";
import { Switch,Route } from "react-router-dom"
import "./App.css";
import Home from "./components/pages/Home";
import SignUpForm from "./components/login_signup/SignUp";
import Posts from "./components/posts/Posts";
import UserProfile from "./components/pages/UserProfile";
import NavBar from "./components/navbar_footer/NavBar";
import Footer from "./components/navbar_footer/Footer";
import { NotFound }from "./components/pages/NotFound";
import AuthProvider from "./providers/AuthContext";
import { AuthRoute, ProtectedRoute } from "./util/routesUtil";
import User from "./components/users/User";
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
	return (
		<div className="App">
			<AuthProvider>
				<Switch>
					<AuthRoute exact path="/">
						<Home />
					</AuthRoute>

					<AuthRoute path="/accounts/emailsignup/">
						<SignUpForm />
					</AuthRoute>

					<ProtectedRoute exact path="/posts">
						<NavBar />
						<Posts />
					</ProtectedRoute>

					<ProtectedRoute path="/post/:id">
						<NavBar />
						<UserPost />
					</ProtectedRoute>

					<ProtectedRoute exact path="/explore">
						<NavBar />
						<Explore />
					</ProtectedRoute>

					<ProtectedRoute path={"/direct/inbox"}>
						<NavBar />
						<h2>direct message</h2>
						{/* <Messages /> */}
						<Footer />
					</ProtectedRoute>

					<ProtectedRoute exact path={`/:username`}>
						<User />
					</ProtectedRoute>

					<ProtectedRoute exact path={`/:username/profile`}>
						<NavBar />
						<UserProfile />
					</ProtectedRoute>

					<ProtectedRoute exact path={`/:username/edit`}>
						<NavBar />
						<UserPageEdit />
					</ProtectedRoute>

					<ProtectedRoute exact path={`/:username/createPost`}>
						<NavBar />
						<CreatePostForm />
						<Footer />
					</ProtectedRoute>

					<Route>
						<NotFound />
					</Route>

				</Switch>
			</AuthProvider>
		</div>
	);
}

export default App;  
