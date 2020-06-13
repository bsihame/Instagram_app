import React from "react";
// import { Container } from "react-bootstrap";
// export const Layout = (props) => (
//   <Container>
//     {props.children}
//   </Container>
// );
export const NavBar = (props)=> {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

