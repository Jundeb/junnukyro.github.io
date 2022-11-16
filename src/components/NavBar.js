import '../css/NavBar.css';
import React, { useRef } from "react";

const NavBar = () => {

  const hamRef = useRef(null);
  const navMenuRef = useRef(null);

  const menuHandler = () => {
    const hamburger = hamRef.current;
    const navMenu = navMenuRef.current;

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  const linkHandler = () => {
    const hamburger = hamRef.current;
    const navMenu = navMenuRef.current;

    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }

  return (
      <nav className='navBar'>
        <a className='brand' href='#'>Junnu Kyrö</a>
        <ul className='nav-menu' ref={navMenuRef}>
          <li className='nav-item'><a className="nav-link" onClick={linkHandler} href='#about'>About Me</a></li>
          <li className='nav-item'><a className="nav-link" onClick={linkHandler} href='#skills'>Skills</a></li>
          <li className='nav-item' ><a className="nav-link" onClick={linkHandler} href='#portfolio'>Portfolio</a></li>
          <li className='nav-item' ><a className="nav-link" onClick={linkHandler} href='#contact'>Contact</a></li>
        </ul>
        <div className='hamburger' ref={hamRef} onClick={menuHandler}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </nav>
  );
}

export default NavBar;