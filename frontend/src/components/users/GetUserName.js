

import React, { useState, useContext, useEffect } from 'react'
import { getUserById } from "../../util/getRequests";
import { AuthContext } from "../../providers/AuthContext";


const GetUserName=()=> {
  const [username, setUserName] = useState("");
	const { currentUser } = useContext(AuthContext);

	const getUserName = async () => {
		const data = await getUserById(currentUser.id);
		debugger
		setUserName(data.username);
	};

	useEffect(() => {
		if (currentUser) {
			getUserName();
			debugger
			console.log(username)
		}
	}, [username]);
 
}
export default GetUserName;
