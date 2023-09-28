import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Main from "./pages/Main/Main";
import Sessions from "./pages/Sessions/Sessions";
import Grind from "./pages/Sessions/Grind";
import Slides from "./pages/Sessions/Slide";
import Rotations from "./pages/Sessions/Rotations";
import Vert from "./pages/Sessions/Vert";
import Manuals from "./pages/Sessions/Manual";
import Grabs from "./pages/Sessions/Grab";
import Freestyle from "./pages/Sessions/Freestyle";

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
        <Route path='/sessions/rotation-tricks' element={<Rotations />}></Route>
        <Route path='/sessions/vert-tricks' element={<Vert />}></Route>
        <Route path='/sessions/manual-tricks' element={<Manuals />}></Route>
        <Route path='/sessions/grab-tricks' element={<Grabs />}></Route>
        <Route
          path='/sessions/freestyle-tricks'
          element={<Freestyle />}></Route>
      </Routes>
    </>
  );
}

export default App;
