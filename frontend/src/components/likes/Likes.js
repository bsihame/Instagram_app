import React, { useState, useEffect } from react;
import { getAllLikes } from "../../util/getRequests"

export default function likes  (post_id)  {
  const [ likes, setLikes ] = useState([]);
  const [likesArray, setLikesArray] = useState(null)
  
  const getLikes = async () => {
    try {
      const res = await getAllLikes();
      setLikes(res.length);
      setLikesArray(res)
    } catch (error) {
      console.log(error);
      setLikes([])
    }
  };

  const likeIcon = async (e) => {
    if (e.target.innerText === "Like") {
      e.target.innerText = "Unlike";
      
    }
  }
}