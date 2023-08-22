import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <a className='nav-link' href='/'>
        Home
      </a>
      <a className='nav-link' href='/main'>
        Login
      </a>
      <a className='nav-link' href='/sessions'>
        Sesh
      </a>
    </>
  );
};

export default Navbar;
