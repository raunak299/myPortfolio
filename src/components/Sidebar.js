import React from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaToggleOff, FaToggleOn } from "react-icons/fa";
import styled from "styled-components";
import { Socials } from "./";
import { useGlobalContext } from "../contexts";
import { v4 as uuidv4 } from "uuid";
import { navLinks } from "../data";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, isThemeChanged, changeTheme } =
    useGlobalContext();
  return (
    <Wrapper>
      <div className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
        <FaTimes className="sidebar-close-btn" onClick={closeSidebar} />
        <ul className="nav-links" onClick={closeSidebar}>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          {navLinks.map((link) => {
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
        <Socials />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-primary-9);
    z-index: 4;
    transform: translateX(-100%);
  }
  .show-sidebar {
    transform: translateX(0);
  }
  .sidebar-close-btn {
    font-size: 2rem;
    color: var(--clr-red);
    opacity: 0.6;
    transition: var(--transition);
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  .sidebar-close-btn:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(1.2);
  }
  .sidebar {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    transition: var(--transition);
  }
  .nav-links {
    text-align: center;
  }
  .nav-link {
    font-size: 2rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    margin-bottom: 1.5rem;
    color: var(--clr-text-5);
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--clr-primary-3);
  }
  .toggle-switch {
    color: hsl(42, 78%, 60%);
    font-size: 2rem;
    cursor: pointer;
  }
`;

export default Sidebar;
