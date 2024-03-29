import React from "react";
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
import UserPageEdit from "./components/users/UserPageEdit";
import Explore from "./components/pages/Explore";
import UserPost from "./components/posts/UserPost";
import Messages from "./components/pages/Messages";
import PostCarousel from "./components/posts/PostCarousel";
import EditPassword from "./components/pages/EditPassword";


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
						<Messages />
						<Footer />
					</ProtectedRoute>
					<ProtectedRoute exact path={`/:username`}>
						<User />
					</ProtectedRoute>
					<ProtectedRoute exact path={`/:username/profile`}>
						<NavBar />
						<UserProfile />
					</ProtectedRoute>
					<ProtectedRoute exact path={`/:username/edit/password/change/`}>
						<NavBar />
						<h2>this is password</h2>
						<EditPassword />
						<Footer />
					</ProtectedRoute>
					<ProtectedRoute exact path={`/:username/edit/nametag/`}>
						<NavBar />
						<h2>this is nametag</h2>
						<UserPageEdit />
						<Footer />
					</ProtectedRoute>

					<ProtectedRoute exact path={`/:username/edit/manage_access`}>
						<NavBar />
						<h2>this is Apps and Websites</h2>
						<UserPageEdit />
						<Footer />
					</ProtectedRoute>

					<ProtectedRoute exact path={`/emails/settings/`}>
						<NavBar />
						<h2>this is Notifications</h2>
						<UserPageEdit />
						<Footer />
					</ProtectedRoute>

					<ProtectedRoute exact path={`/accounts/privacy_and_security/`}>
						<NavBar />
						<h2>this is privacy_and_security</h2>
						<UserPageEdit />
						<Footer />
					</ProtectedRoute>

					<ProtectedRoute exact path={`/session/login_activity/`}>
						<NavBar />
						<h2>this is session login activity</h2>
						<UserPageEdit />
						<Footer />
					</ProtectedRoute>

					<ProtectedRoute exact path={`/emails/emails_sent/`}>
						<NavBar />
						<h2>this is Emails from Instagram</h2>
						<UserPageEdit />
						<Footer />
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
					<ProtectedRoute exact path={`/:username/carousel`}>
						<PostCarousel />
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
