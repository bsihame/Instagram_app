import React, { createContext, useState, useEffect } from "react";
import Loader from "../images/loader.gif"
import "../CSS/Loading.css"
import firebase from "../firebase";
import { getFirebaseIdToken } from "../util/firebaseFunctions";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [currentUser, setCurrentUser] = useState(null);
	const [token, setToken] = useState(null);

	const updateUser = (user) => {
		if (user) {
			const { email, uid } = user;
			const lastLogin = user.metadata.lastLogin;
			setCurrentUser({ email, uid, lastLogin });

			getFirebaseIdToken().then((token) => {
				setToken(token);
				setLoading(false);
			});
		} else {
			setCurrentUser(null);
			setLoading(false);
		}
	};
	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged(updateUser);
		return unsubscribe;
	}, []);
	if (loading) return <div className="loader-container">
		<div className="loader">
			<img src={Loader} />
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
