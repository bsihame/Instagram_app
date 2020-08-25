import firebase from "../firebase";
import storage  from '../firebase';

export const logout = () => firebase.auth().signOut();

export const login = (email, password) =>
	firebase.auth().signInWithEmailAndPassword(email, password);

export const signUp = (email, password) =>
	firebase.auth().createUserWithEmailAndPassword(email, password);


export const getFirebaseIdToken = () =>
	firebase.auth().currentUser.getIdToken(false);

	export const signUpWithGoogle = async () => {
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await firebase.auth().signInWithPopup(provider);
        return result;
    } catch (error) {
        throw error;
    }
}

export const signUpWithFacebook = async () => {
    try {
        const provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope('email');
        const result = await firebase.auth().signInWithPopup(provider);
        return result;
    } catch (error) {
        throw error;
    }
}

export const uploadPicture = async ( folderPath, data, callback, currentUser ) => {
	const userPicture = data.image ? data.image : data;
	let storageRef = storage().ref(folderPath + userPicture.name);
	let upload = storageRef.put(userPicture);
	upload.on('state_changed', snapshot => {
	},error => {
			console.log(error)
		}, async () => {
			const image = await upload.snapshot.ref.getDownloadURL();
			debugger
			data.postBody ? 
			await callback({postBody: data.postBody, tags: data.tags, image}, currentUser) :
			await callback({id: data.id, url: image});
		})
}

			 	
