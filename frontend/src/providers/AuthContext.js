import React, { createContext, useState, useEffect } from "react";
import Loader from "../images/loader.gif"
import firebase from "../firebase";
import { getFirebaseIdToken } from "../util/firebaseFunctions";
import "../CSS/Loading.css"
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [currentUser, setCurrentUser] = useState({});
	const [token, setToken] = useState(null);

	const updateUser = (user) => {
		if (user) {
			const { email, uid } = user;
			const lastLogin = user;
			setCurrentUser({ email, lastLogin, id:uid });

			getFirebaseIdToken().then((token) => {
				setToken(token);
				setLoading(false);
			});
		} else {
			setCurrentUser({});
			setLoading(false);
		}
	};
	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged(updateUser);
		return unsubscribe;
	}, []);
	if (loading)
		return <div className="loader-container">
		<div className="loader">
			<img src={Loader} alt=""/>
			<div>Loading ...</div>
		</div>
		</div>
	return (
		<AuthContext.Provider value={{ currentUser, token }}>
			{children}
		</AuthContext.Provider>
	);
};
export default AuthProvider;
