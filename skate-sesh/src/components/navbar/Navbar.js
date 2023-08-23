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
      <a className='nav-link' href='/trick-tips'>
        Trick Tips
      </a>
    </>
  );
};

export default Navbar;
