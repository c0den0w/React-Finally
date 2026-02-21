import { useState, useRef, useEffect } from 'react'
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
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToBlogs = () => {
    //accesses the actual DOM element the ref is attached to and scrolls it into view with a smooth animation
    blogsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NavBar onBlogsClick={scrollToBlogs} />
      <Hero />
      <div ref={blogsRef}>
        <Blogs />
      </div>

      {/* Scroll Guide Ruler */}
      <div className="scroll-guide-container">
        <div className="scroll-guide-track">
          <div
            className="scroll-guide-indicator"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>
        <div className="scroll-progress-text">{(scrollProgress).toFixed(2)}</div>
      </div>
    </>
  );
}

export default App
