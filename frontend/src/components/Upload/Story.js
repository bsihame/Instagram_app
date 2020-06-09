import React from "react";

export default function Story({posts}){
    return (
        <div >
            <h1>story</h1>
            
                {posts.map(user => {
                    {/* debugger */}

                   return <div key = {user.postid} className = 'tweet'>
                                <div className = 'tweetHead'>
                                    <h3>{user.username}</h3>
                                    <img src = {user.user_pic}/>
                                </div>
                            <p>{user.tweet}</p>
                        </div>
                    // return <li className = 'tweet' key= {user.postid}> {user.tweet}</li> 
                })}
               
            
        </div>
    )
}
