//  import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../providers/AuthContext';
// import { getUserById, updateUser } from '../../util/getRequests';
// import { useInput } from '../../util/customHooks';
// import { uploadPicture, getFirebaseIdToken } from '../../util/firebaseFunctions';
// import { useHistory } from 'react-router-dom';


// export default function UserPageEdit(firstName) {
  
//     const history = useHistory();
//     const { currentUser } = useContext(AuthContext);
//     const [ user, setUser ] = useState({})
//     const [ currentFullName, setCurrentFullName] = useState("");
//     const [ currentUserName, setCurrentUserName ] = useState("");
//     const [currentBio, setCurrentBio] = useState("");
//     const token = getFirebaseIdToken(); 

//     const fullName = useInput("");
//     const userName = useInput("");
//     const bio = useInput("");
//     let id = currentUser.id
//     console.log(id)

//     const getUserCall = async () => {
//       const data = await getUserById(currentUser.id);
//       setCurrentFullName(data.full_name);
//       setCurrentUserName(data.username);
//       setCurrentBio(data.bio)
//       setUser(data);
//     }
    
//   // const updateUserCall = async () => {
//   //       const userData = {
//   //           full_name: fullName.value,
//   //           username: userName.value ,
//   //           bio: bio.value
//   //       }
//     // const response = await updateUser(currentUser.id,{
// 		// 	headers: {
// 		// 		authtoken: token,
//     //   },
// 		// });
   
// // }
    


//     // const handleFileSelect = ( e ) => {
// 		// setProfilePic(e.target.files[0]);
//     // }
//   useEffect(() => {
// 		getUserCall();
// 		// updateUserCall();
// 	}, []);
//     return (
//         <div className="up-edit">
//                 <div className="editContainer">
//                     {/* <label>
//                         <span>Profile Picture: </span>
//                         <input type="file"  accept=".png, .jpg, .jpeg" onChange={handleFileSelect} />
//                     </label> */}

//                     <div className="upe-userInteraction">
//                         <label>
//                             <span>Full Name:</span> 
//                             <input type="text" placeholder="Full Name" {...fullName} />
//                         </label>
//             </div>
//             <div className="upe-userInteraction">
//                         <label>
//                             <span>User Name:</span> 
//                             <input type="text" placeholder="User Name" {...userName} />
//                         </label>
//                     </div>
//                 </div>

//                 <div>
//                     <label >Bio: </label>
//                     <textarea rows="7" cols="40" placeholder="Bio" {...bio} />
//                 </div>
//             <div >
//                 {/* <button type="submit" onClick={updateUserCall}>Update</button> */}
//             </div>
//         </div>
//     )
// }

