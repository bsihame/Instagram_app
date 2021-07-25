import firebase, { messaging } from "firebase/app";
// importScripts("https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/8.7.1/firebase-analytics.js")
import "firebase/auth";
import "firebase/storage";

const {
	REACT_APP_APIKEY,
	REACT_APP_AUTHDOMAIN,
	REACT_APP_DATABASEURL,
	REACT_APP_PROJECTID,
	REACT_APP_STORAGEBUCKET,
	REACT_APP_MESSAGINGSENDERID,
	REACT_APP_ID,
	REACT_APP_MEASUREMENTID,
} = process.env;

const config = {
	apiKey: REACT_APP_APIKEY,
	authDomain: REACT_APP_AUTHDOMAIN,
	databaseURL: REACT_APP_DATABASEURL,
	projectId: REACT_APP_PROJECTID,
	storageBucket: REACT_APP_STORAGEBUCKET,
	messagingSenderId: REACT_APP_MESSAGINGSENDERID,
	appId: REACT_APP_ID,
	measurementId: REACT_APP_MEASUREMENTID,
};
	console.log(process.env);
	console.log("CONFIG", config)
 firebase.initializeApp(config);
//  firebase.analytics();
// const messaging = firebase.messaging();
// messaging.requestPermission()
// .then(function(){
// 	console.log("Have permision")
// })
// .then(function(token){
// 	console.log(token)
// })
// .catch(function(err) {
// 	console.log("Error Occurred")
// })
// messaging.onMessage(function(payload) {
// 	console.log("onMessage: ",payload );
// })



export const storage = firebase.storage()

export default firebase;



