import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
// import Login from "./components/auth/Login";
import Home from "./components/pages/Home"
import SignUpForm from "./components/login_signup/SignUp";
import UsersProfile from "./components/users/UsersProfile";
import DisplayUsers from "./components/users/DisplayUsers"
// import User from "./components/users/User";
// import AuthProvider from "./providers/AuthContext";
// import { AuthRoute, ProtectedRoute } from "./util/routesUtil"

function App() {
	return (
		<div className="App">
      <Route path="/">
        <Home />
      </Route>

      <Route path="/users">
        <UsersProfile/>
      </Route>

      <Route path="/users">
        <DisplayUsers/>
      </Route>
		</div>
	);
}

export default App;
