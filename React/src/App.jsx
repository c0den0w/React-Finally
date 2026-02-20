import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from "./NavBar.jsx";
import Hero from "./Hero.jsx";
import Blogs from './Blogs.jsx';
import './App.css'


function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Blogs />
    </>
  );
}

export default App
