// import React, { useState } from "react"
// import { storage } from "../../firebase"

// export default function UploadImage() {
//   const [image, setImage] = useState(null);
//   const [url, setUrl] = useState("");
//   const [progress, setProgress] = useState(0);
  
//   const handleChange = (e) => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };
//   const handleUpload = () => {
//     const uploadTask = storage.ref(`images/${image.name}`).put(image);
//     uploadTask.on(
//       "state_changed",
//       // snapshot => {
//       //   const progress = Math.round(
//       //     (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//       //   );
//       //   setProgress(progress)
//       // },
//       // error => {
//       //   console.log(error);
//       // },
//       () => {
//         storage
//           .ref("images")
//           .child(image.name)
//           .getDownloadURL()
//           .then(url => {
//             debugger
//             setUrl(url); 
//           })
//       }
//     );
//   }
//   console.log("image: ", image);

//   return (
//     <div >
//       {/* <progress value={progress} max="100" /> */}
//       {/* <br />
//       <br /> */}
//       <input type="file"
//         onChange={handleChange} />
//       <button onClick={handleUpload}>Upload Image</button>
//       <br />
//       <h2>{url}</h2>
      
//       <br />
//       <div>
     
//         {url ?
//           <img src={url}  alt="firebase-image" />
//           :
//           <img src="" alt="User Profile " />
//         }
     
      
//         </div>
      
       
//     </div>
//   );
// }
