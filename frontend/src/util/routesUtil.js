import React, { useContext, useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";
import { getUserById } from "../util/getRequests";

export const AuthRoute = ({ children, ...rest }) => {
	const [username, setUserName] = useState("");
	const { currentUser } = useContext(AuthContext);
	const getUserName = async () => {
		try {
			const data = await getUserById(currentUser.id);
			setUserName(data.username);
		} catch (error) {
			console.log(error)
		}
	};

	useEffect(() => {
		if (currentUser) {
			getUserName();
		}
	}, [username]);

	return (
		<Route
			{...rest}
			render={() => {
				return !currentUser ? children : <Redirect to={`/${username}`} />;
			}}
		/>
	);
};

export const ProtectedRoute = ({ children, ...rest }) => {
	const { currentUser } = useContext(AuthContext);
	return (
		<Route
			{...rest}
			render={() => {
				return currentUser ? children : <Redirect to="/" />;
			}}
		/>
	);
};
