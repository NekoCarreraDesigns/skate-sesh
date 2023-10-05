import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <>
      <div className='form-div'>
        <p className='intro-paragraph'>
          Please login to use skate sesh, or sign up if you are new!
        </p>
        <input
          className='username-input'
          placeholder='please enter your username'
          label='username'></input>
        <br />
        <br />
        <input
          className='password-input'
          placeholder='please enter your password'
          label='password'
          type='password'></input>
        <br />
        <button className='login-button'>Login</button>
        <br />
        <a href='/sign-up' className='sign-up-link'>
          Not an existing user. Please sign up here
        </a>
        <br />
        <a className='forgotten-password-link' href='/password-reset'>
          Forgot Password
        </a>
      </div>
    </>
  );
};

export default Main;
