import React from "react";
import Footer from "../navbar_footer/Footer";
import NavBar from "../navbar_footer/NavBar"

export function NotFound() {
  return (
    <div>
      <NavBar />
      <h1>Sorry, this page isn't available</h1>;
      <h4>This link you followed may be broken, or the page may have been removed. Go back to Instagram</h4>
      <Footer />
    </div>
  )
}