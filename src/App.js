import './App.css';

import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import LandingPage from "./Pages/LandingPage";
import Consult from "./Pages/Consult"
import News from "./Pages/News"

function App() {
  return (
   <>
<Routes>
    <Route path="/" element={<LandingPage/> }/>
    <Route path="/konsult" element={<Consult/>}/>
    <Route path="/nyheter" element={<News/>}/>
   </Routes>
   
  </>
  );
}

export default App;
