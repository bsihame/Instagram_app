import React, { useState } from "react"
import { storage } from "../../firebase"

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
}