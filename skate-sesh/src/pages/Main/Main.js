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
        <br />
        <input
          className='name'
          label='name'
          placeholder='what is your full name'></input>
        <br />
        <br />
        <input
          className='username'
          label='username'
          placeholder='please enter a username'></input>
        <br />
        <br />
        <input
          className='password'
          type='password'
          label='password'
          placeholder='please type in a password'></input>
        <br />
        <br />
        <button className='sign-up-button'>Sign Up</button>
      </div>
    </>
  );
};

export default Main;
