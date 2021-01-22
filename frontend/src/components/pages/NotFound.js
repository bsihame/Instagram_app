import React from "react";
import Footer from "../navbar_footer/Footer";
import NavBar from "../navbar_footer/NavBar";
import "../../CSS/NotFound.css";


export function NotFound() {
  return (
    <>
		<div className="notfoundDiv">
			<NavBar className="notfoundNav" />
			<h1 className="notfoundSorryText">Sorry, this page isn't available</h1>
			<h4 className="notfoundBrokenText">
				This link you followed may be broken, or the page may have been removed.
				Go back to Instagram
			</h4>
      </div>
			<Footer />
      </>
	);
}