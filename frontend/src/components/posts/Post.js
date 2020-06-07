import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Link , NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthContext';
import { logout } from "../../util/firebaseFunctions";
import UserBio from "../users/UserBio"
import PostImage from "../posts/Image"
// import { apiURL } from '../../util/apiURL';
// import profileIcon from "../../images/profile-icon-300x300.png";
import Login from "../login_signup/Login"

export default function Post() {
  const { currentUser } = useContext(AuthContext);
  // const API = apiURL();
  const [posts, setPosts] = useState([]);
  const getPost = async (url) => {
    try {
      let res = await axios.get(url);
      debugger
      setPosts(res.data.payload)
       
     } catch (error) {
       setPosts([])
    }
    getPost()
  }

  const postsDisplay = posts.map(post =>{
    return (<>
      <PostImage key={post.id} postId={post.id} profilePic={post.profile_pic} userName={post.username} filePath={post.picture} postContent={post.content} />
      {/* <Hashtags postId={post.id} userName={post.username}/> */}
    </>)
    
  })
  

	const handleLogOut = () => {
		if (currentUser) {
			return <Link onClick={logout}>Logout</Link>;
		} else {
			return (
				<>
					<Login />
				
				</>
			);
		}
  };
  
  return (
    <>
      <h2>Post</h2>
      <div>
        {/* <img src={profile_pic} alt={user.name} /> */}
      </div>
      
      <div>
        {/* <Link to={"/" + users.username} className="bio">{users.full_name}</Link>  */}
         {/* <h4 className="username">@{user.username}</h4> */}
        </div>
     <nav>
       <NavLink className="upload" exact to={"/upload"}>Upload</NavLink>
       <NavLink className="logOut" onClick={handleLogOut} exact to={"/"}>Log Out</NavLink>
      </nav>
        

                <div >
                <div className="userInfo split">
                    <UserBio/>
                    </div>
                <div>
                    {postsDisplay}
                </div>
                </div>
    </>
  )

}