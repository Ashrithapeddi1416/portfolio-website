import React from "react";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Timeline from "./components/Timeline";
import Menu from './components/Menu'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Scrollbar from "./components/Scrollbar";

function App() {
  return (
    <div className='m-4 grid gap-4 md:grid-cols-12'>
     <><BrowserRouter>
      <Scrollbar/>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Achievements" element={<Achievements/>}/>
        <Route path="/Timeline" element={<Timeline/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
      </>
    </div>
  );
}

export default App;
