import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Main from "./pages/Main/Main";
import Sessions from "./pages/Sessions/Sessions";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/main' element={<Main />}></Route>
        <Route path='/sessions' element={<Sessions />}></Route>
      </Routes>
    </>
  );
}

export default App;
