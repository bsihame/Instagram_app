// // import react, { useState, useContext, useEffect } from "react";

// import { getLikeCommentByPostId,  createLikes } from "../../util/getRequests"
// import { apiURL } from "../../util/apiURL";
// import { AuthContext } from "../../providers/AuthContext";



// export default function likes({ post_id }) {
//   const API = apiURL();
//   const { currentUser } = useContext(AuthContext)
//   let id = currentUser.id;
//   console.log(id)
//   const [likes, setLikes] = useState([]);
//   const [likesArray, setLikesArray] = useState(null)
  
//   const getLikes = async () => {
//     try {
//       const res = await getLikeCommentByPostId(post_id);
//       debugger
//       if (res) {
//         setLikes(res.length);
//         setLikesArray(res)
//       }
//     } catch (error) {
//       console.log(error);
//       setLikes([])
//     }
//   };

//   useEffect(() => {
//     getLikes()
//   }, []);

//   const handleSubmit = async (e) =>{
//     e.preventDefault();

//     let dataObj = {
//       liker_id,
//       post_id
//     };
//     try {
//       const res = createLikes(dataObj);
//       if (res) {
//         getLikes()
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   const likeIcon = async (e) => {
//     if (e.target.innerText === "Like") {
//       e.target.innerText = "Unlike";
//       try {
//         const res = await getLikeComment();
//         debugger
//         getLikes()
//       } catch (error) {
//         console.log(error)
//       }
//     } else {
//       e.target.innerText = "Like";
      
//     }
//   }
//   const likedArray = (arr) => {
//     return arr.every(liked => {
//       debugger
//        return liked.length
//     })
//   }

//   useEffect(() => {
//     getLikes()
//   }, []);
//   return (
//     <>
//       <h2>This is likes</h2>
//       {/* <div className="createLikes">

//       </div> */}
//       <div>
//         <form  onclick={handleSubmit}>
//       {likesArray ?
        
//         likedArray(likesArray) ?
//           <button onClick={likeIcon}>Like</button>
//           :
//           <button onClick={likeIcon}>Unlike</button>
//         : null
//       }
//       <p>{likes}</p>
//       </form>
//       </div>
//       </>
//   )
// }