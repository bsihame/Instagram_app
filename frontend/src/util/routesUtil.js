import React, { useContext, useState, useEffect } from "react";

// import React, { useContext } from "react";
import { Route, Redirect} from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";
import { getUserById } from "../util/getRequests";



// export const AuthRoute = ({ children, setLoggedUser, ...rest }) => {
export const AuthRoute = ({ children, ...rest }) => {

  // const { currentUser } = useContext(AuthContext);
  const [username, setUserName] = useState("");
	const { currentUser } = useContext(AuthContext);
	const getUserName = async () => {
	const data = await getUserById(currentUser.id);
		setUserName(data.username);
	};

	useEffect(() => {
		if (currentUser) {
			getUserName();
		}
	}, [username]);
  // setLoggedUser(currentUser)
  // console.log(currentUser)
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !currentUser ? children : <Redirect to={`/${username}`}
        />
      }}
    />
  )
};

export const ProtectedRoute = ({ children, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({location }) => {
        return currentUser ? children : <Redirect to="/"
        />
      }}
    />
  )
}