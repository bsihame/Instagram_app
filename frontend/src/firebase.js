import firebase from "firebase/app";
// import "firebase/auth";
import "firebase/storage"

const {
	REACT_APP_APIKEY,
	REACT_APP_AUTHDOMAIN,
	REACT_APP_DATABASEURL,
	REACT_PROJECTID,
	REACT_APP_STORAGEBUCKET,
	REACT_APP_MESSAGINGSENDERID,
	REACT_APP_ID,
} = process.env;

const config = {
	apiKey: REACT_APP_APIKEY,
	authDomain: REACT_APP_AUTHDOMAIN,
	databaseURL: REACT_APP_DATABASEURL,
	projectId: REACT_PROJECTID,
	storageBucket: REACT_APP_STORAGEBUCKET,
	messagingSenderId: REACT_APP_MESSAGINGSENDERID,
	appId: REACT_APP_ID,
};
console.log(process.env);
firebase.initializeApp(config);

const storage = firebase.storage()


export default firebase;


