import React from "react";
import { NavLink } from "react-router-dom";
import "../../CSS/Footer.css"
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerdiv">
      <nav>
        <NavLink className="link" to={"/about-us"}>ABOUT</NavLink>
        <NavLink className="link" to={"/help"}>HELP</NavLink>
        <NavLink className="link" to={"/blog"}>PRESS</NavLink>
        <NavLink className="link" to={"/developer"}>API</NavLink>
        <NavLink className="link" to={"/about/jobs/"}>JOBS</NavLink>
        <NavLink className="link" to={"/519522125107875"}>PRIVACY</NavLink>
        <NavLink className="link" to={"/581066165581870"}>TERMS</NavLink>
        <NavLink className="link" to={"/explore/locations/"}>LOCATIONS</NavLink>
        <NavLink className="link" exact to={"/directory/profiles/"}>TOP ACCOUNTS</NavLink>
        <NavLink className="link" exact to={"/directory/hashtags/"}>HASHTAGS</NavLink>
        <NavLink className="link" to={"/language"}>LANGUAGE</NavLink>
      </nav>
        <span className="insFacebook" to={"/press"}>@2020 INSTAGRAM FROM FACEBOOK</span>
        </div>
    </footer>
  )
};