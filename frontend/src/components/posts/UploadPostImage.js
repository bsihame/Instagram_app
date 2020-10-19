import React, { useState } from "react";
import { storage } from "../../firebase"

export default function UploadPostImage() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    // const uploadTask = storage.ref(`images/${image.name}`).put(image);
    // uploadTask.on(
    //   "state_changed",
    //   () => {
    //     storage
    //       .ref("images")
    //       .child(image.name)
    //       .getDownloadURL()
    //       .then(url => {
    //         setUrl(url);
    //       })
    //   }
    // );
    return url
  }
  console.log("image: ", image);

  return (
    <div >
      <input type="file"
        onChange={handleChange} />
      <button onClick={handleUpload}>Upload Image</button>
      <br />
      {/* <h2>{url}</h2> */}

      <br />
      {/* <div>

        {url ?
          <img src={url}  alt="firebase-image" />
          :
          <img src="" alt="User Profile " />
        }

        </div>
       */}

    </div>
  );
}
