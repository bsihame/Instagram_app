import React, { useState, useEffect } from "react"
// import { useParams, useHistory } from "react-router-dom"
// import uploadPicture from "../../util/firebaseFunctions";
import { ifUserNameExist } from "../../util/getRequests";
import storage from "firebase"
// import { onLog } from "firebase";
export default function ProfilePic() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState([0]);
  const fileInput = React.createRef()
  
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`image/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress)
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url)
          })
      }
    );
  }
  console.log("image", image);

  return (
    <div >
      <progress value={progress} max="100" />
      <br />
      <br />
      <input type="file" ref={fileInput} onChange={handleChange} />
      <button onClick={handleUpload}>Upload Image</button>
      <br />
      {url}
      <br />
      <img src={url} alt="firebase-image" />
    </div>
  );
  













  // const[ user, setUser]= useState({})
  // const { username } = useParams ()
  // const [file, setFile] = useState(null)
  // const [loading, setLoading] = useState(true)
  // const history = useHistory();
  // const getUser = async () => {
  //   try {
  //     let user = await fet
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  
  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   file(true)
  //   // setLoading(true)
  //   try {
  //     await ifUserNameExist(username.value)
  //     debugger
  //     setUser(user)
  //     // setLoading(true)
      
  //   } catch (error) {
  //     console.log(error)
  //     }
  // }
  // const onChange = () => {
  //   //get file

  //   //create storage

  //   //upload file
  //   //update progress bar 
  //   setFile(true)
  // }
  // useEffect(() => {
  //   ifUserNameExist()
  // },[username])
  
  // return (
  //   <div>
  //     <form onSubmit={onSubmit}>
  //       <input
  //         className="imageProfile"
  //         type="file"
  //         accept="image/png, image/jpeg"
  //         onChange={onChange}
  //       />
  //       <button type="submit">
  //         Upload Picture
  //       </button>
  //     </form>
  //   </div>
  // )
}