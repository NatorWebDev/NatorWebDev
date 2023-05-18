import {HeroSection} from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import { useState } from "react";

function App() {

  const [show, setShow] = useState('')

  return (
    <>
      <HeroSection show={show} setShow={setShow}/>
      <About setShow={setShow}/>
      <Projects setShow={setShow}/>
    </>
  )
}

export default App
