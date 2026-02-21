import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from "./NavBar.jsx";
import Hero from "./Hero.jsx";
import Blogs from './Blogs.jsx';
import './App.css'


function App() {
  //Creates a React ref that can hold a reference to a DOM element
  //Initialized to null since no element is attached yet
  const blogsRef = useRef(null);

  const scrollToBlogs = () => {
    //accesses the actual DOM element the ref is attached to and scrolls it into view with a smooth animation
    blogsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <NavBar onBlogsClick={scrollToBlogs} />
      <Hero />
      <div ref={blogsRef}>
        <Blogs />
      </div>
    </>
  );
}

export default App
