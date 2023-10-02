import React, { useState, useEffect } from 'react';
import './home.css';

function Home() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${scrolling ? 'affix' : ''}`}>
      <div className="container">
        <div className="logo" style={{fontWeight:'bold'}}>
          <a href="#">WikiCrime</a>
        </div>
        <div id="mainListDiv" className="main_list">
          <ul className="navlinks">
            <li><a href="#">Home</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Prison</a></li>
            <li><a href='#'>Helpline</a></li>
            <li><a href='#'>Search</a></li>
            <li><a href="#">Log In</a></li>
          </ul>
        </div>
        <span className="navTrigger">
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </nav>
  );
}

export default Home;
