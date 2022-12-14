import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaToggleOff, FaToggleOn } from "react-icons/fa";
import { useGlobalContext } from "../contexts";
import { v4 as uuidv4 } from "uuid";
import { navLinks, pageTitle, typeSpeed } from "../data";

const Header = () => {
  const { openSidebar, changeTheme, isThemeChanged } = useGlobalContext();
  const [title, setTitle] = useState("");

  //typewriter effect starts
  let i = 0;
  const typeWriter = () => {
    if (i > pageTitle.length) {
      return;
    }
    setTitle((state) => {
      return state + pageTitle.charAt(i);
    });
    i++;
    setTimeout(typeWriter, typeSpeed); //Recursion
  };

  useEffect(typeWriter, []);
  //typeWriter effect ends

  // Change theme starts

  // Change theme ends

  //Navbar fix logic starts
  useEffect(() => {
    const navbar = document.getElementById("navbar-container");
    window.isNavbarFixed = false;
    window.offsetValue = 0; //Added to avoid flickering issue
    const fixNavbar = () => {
      const navbarOffset = navbar.offsetHeight;
      if (window.scrollY > navbarOffset && !window.isNavbarFixed) {
        navbar.classList.add("navbar-fixed");
        window.isNavbarFixed = true;
        //Checking for minimum offsetvalue
        window.offsetValue = Math.min(navbarOffset, window.scrollY); //Added to avoid flickering issue
      } else if (window.scrollY < window.offsetValue && window.isNavbarFixed) {
        navbar.classList.remove("navbar-fixed");
        window.isNavbarFixed = false;
      }
    };
    window.addEventListener("scroll", fixNavbar);
    return () => {
      window.removeEventListener("scroll", fixNavbar);
    };
  }, []);
  //Navbar fix logic ends
  return (
    <Wrapper linkNum={navLinks.length}>
      <div id="navbar-container" className="nav-container">
        <nav className="section-center navbar">
          <div className="typewriter">
            {/* <h3 className='page-title'>&lt;/Roshan&gt;</h3> */}
            <h3 className="page-title">{title}</h3>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            {navLinks.map((link, index) => {
              return (
                <li key={uuidv4()}>
                  <Link to={`/${link.toLowerCase()}`} className="nav-link">
                    {link}
                  </Link>
                </li>
              );
            })}
            {isThemeChanged ? (
              <li>
                <FaToggleOn onClick={changeTheme} className="toggle-switch" />
              </li>
            ) : (
              <li>
                <FaToggleOff onClick={changeTheme} className="toggle-switch" />
              </li>
            )}
          </ul>
          <FaBars className="nav-icon" onClick={openSidebar} />
        </nav>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .page-title {
    color: var(--clr-primary-5);
    text-shadow: var(--dark-shadow);
  }
  .nav-icon {
    font-size: 2rem;
    color: var(--clr-primary-5);
  }
  .nav-links {
    display: none;
  }

  .nav-container {
    background: var(--clr-primary-9);
    padding: 1rem;
  }
  .navbar-fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--clr-white);
    z-index: 2;
    box-shadow: var(--light-shadow);
  }
  .toggle-switch {
    color: hsl(42, 78%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
  }
  //Typewriter effect css starts
  .typewriter .page-title {
    animation: blink-caret 0.75s infinite;
    border-right: 0.25rem solid orange;
  }
  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
  //Typewriter effect css ends

  @media screen and (min-width: 768px) {
    .nav-links {
      display: grid;
      grid-template-columns: repeat(${(props) => props.linkNum + 2}, 1fr);
      justify-items: center;
      column-gap: 2rem;
    }
    .nav-link {
      color: var(--clr-text-1);
      font-weight: 500;
      display: inline-block;
      transition: var(--transition);
      letter-spacing: var(--spacing);
    }
    .nav-icon {
      display: none;
    }
    .nav-link:hover {
      color: var(--clr-primary-3);
      transform: scale(1.2);
    }
  }
`;

export default Header;
