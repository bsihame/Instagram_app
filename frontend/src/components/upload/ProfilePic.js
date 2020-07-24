import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import uploadPicture from "../../util/firebaseFunctions";
import { ifUserNameExist } from "../../util/getRequests";

export default function ProfilePic() {
  const[ user, setUser]= useState({})
  const { username } = useParams ()
  const [file, setFile] = useState(null)
  // const [loading, setLoading] = useState(true)
  const history = useHistory();
  // const getUser = async () => {
  //   try {
  //     let user = await fet
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  
  const onSubmit = async (e) => {
    e.preventDefault();
    file(true)
    // setLoading(true)
    try {
      await ifUserNameExist(username.value)
      debugger
      setUser(user)
      // setLoading(true)
      
    } catch (error) {
      console.log(error)
      }
  }
  const onChange = () => {
    //get file

    //create storage

    //upload file
    //update progress bar 
    setFile(true)
  }
  useEffect(() => {
    ifUserNameExist()
  },[username])
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          className="imageProfile"
          type="file"
          accept="image/png, image/jpeg"
          onChange={onChange}
        />
        <button type="submit">
          Upload Picture
        </button>
      </form>
    </div>
  )
}