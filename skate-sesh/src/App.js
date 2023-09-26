import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Main from "./pages/Main/Main";
import Sessions from "./pages/Sessions/Sessions";
import Grind from "./pages/Sessions/Grind";
import Slides from "./pages/Sessions/Slide";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/main' element={<Main />}></Route>
        <Route path='/sessions' element={<Sessions />}></Route>
        <Route path='/sessions/grind-tricks' element={<Grind />}></Route>
        <Route path='/sessions/slide-tricks' element={<Slides />}></Route>
      </Routes>
    </>
  );
}

export default App;
