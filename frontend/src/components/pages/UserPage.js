import React from "react";
import NavBar from "../navbar_footer/NavBar";
import Posts from "../posts/Posts"
import Footer from "../navbar_footer/Footer";
export default function UserPage() {
  return (
    <>
      <div><NavBar/></div>
      <div>
        UserPage
      </div>
      
      <div>
        <h2>right div</h2>
      <div>
        User Pictures and username
      </div>
      <div>help prevent corona</div>
     
      <div>
         <Posts />
      </div>
        ></div>
      

      <div>
        <h2>left div</h2>
        <div>
          current user  with username
       </div>
        
       <div>
        suggestion users div with username
       </div>
       
      <div>
      <Footer />
      </div>
      </div>
    </>
  )

}