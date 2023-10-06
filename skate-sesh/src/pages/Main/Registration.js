import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    username: "",
    password: "",
  });

  const handleNameChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    let path = `/main`;
    const response = await fetch("/user-sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data.message);
      console.log(response);
      navigate(path);
    } else {
      const errorData = await response.json();
      console.error(errorData.message);
      console.log(errorData);
    }
  };

  return (
    <>
      <form className='form-div' onSubmit={handleFormSubmit}>
        <p className='intro-paragraph'>
          Please sign up to use the skate sesh app
        </p>
        <br />
        <input
          className='first-name'
          label='first-name'
          placeholder='please enter your first name'
          name='firstName'
          value={formData.firstName}
          onChange={handleNameChange}></input>
        <br />
        <br />
        <input
          className='email'
          label='first-name'
          placeholder='please enter your email address'
          name='email'
          value={formData.email}
          onChange={handleNameChange}></input>
        <br />
        <br />
        <input
          className='username'
          label='username'
          placeholder='please enter a username'
          name='username'
          value={formData.username}
          onChange={handleNameChange}></input>
        <br />
        <br />
        <input
          className='password'
          type='password'
          label='password'
          placeholder='please type in a password'
          name='password'
          value={formData.password}
          onChange={handleNameChange}></input>
        <br />
        <br />
        <button className='sign-up-button' type='submit'>
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Registration;
