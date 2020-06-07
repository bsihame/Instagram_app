import React from "react";
import { Route} from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar_footer/NavBar";
import Footer from "./components/navbar_footer/Footer";
import Home from "./components/pages/Home"
import SignUpForm from "./components/login_signup/SignUp";
import Post from "./components/posts/Post";
import UsersProfile from "./components/users/UsersProfile";
import User from "./components/users/User";
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

				<ProtectedRoute path="/users">
					<NavBar/>
					<UsersProfile />
					<Footer/>
				</ProtectedRoute>
				 
				<Route path="/user">
		
				<User />
				</Route>
				
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
