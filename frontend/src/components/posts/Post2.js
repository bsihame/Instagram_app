// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// // import { logout } from "../../util/firebaseFunctions";
// import { apiURL } from '../../util/apiURL';
// import Story from "../Upload/Story";
// import  currentUser  from "../../providers/AuthContext"


// export default function Post() {
//   // const currentUser = useContext(AuthContext);
//   // const API = apiURL();
//   const [posts, setPosts] = useState([]);
//   const getPost = async (url) => {
//     try {
//       let res = await axios.get(url);
//       debugger
//       setPosts(res.data.payload)
       
//      } catch (error) {
//        setPosts([])
//     }
//     getPost()
//   }

//   const postsDisplay = posts.map(post => {
//     debugger
//     return (<>
//       {/* <PostImage key={post.id} postId={post.id} profilePic={post.profile_pic} userName={post.username} filePath={post.picture} postContent={post.content} /> */}
//       {/* <Hashtags postId={post.id} userName={post.username}/> */}
//     </>)
    
//   })
  

// 	// const handleLogOut = () => {
// 	// 	if (currentUser) {
// 	// 		return <Link onClick={logout}>Logout</Link>;
// 	// 	} else {
// 	// 		return (
// 	// 			<>
// 	// 				<Login />
				
// 	// 			</>
// 	// 		);
// 	// 	}
//   // };
  
//   return (
//     <>
//       <h2>Post</h2>
//       <div>
//         {/* <img src={profile_pic} alt={user.name} /> */}
//       </div>
      
//       <div>
//         {/* <Link to={"/" + users.username} className="bio">{users.full_name}</Link>  */}
//          {/* <h4 className="username">@{user.username}</h4> */}
//         </div>
//      {/* <nav>
//        <NavLink className="upload" exact to={"/upload"}>Upload</NavLink>
//        <NavLink className="logOut" onClick={handleLogOut} exact to={"/"}>Log Out</NavLink>
//       </nav>
//          */}

//                 <div >
//                 <div className="userInfo split">
//                     {/* <UserBio/> */}
//                     </div>
//                 <div>
//                     {postsDisplay}
//                 </div>
//                 </div>
//     </>
//   )

// }