import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router';

const NavItems = ({ isMobile, closeMobileNav }) => {
    const location = useLocation();

    return (
        <ul className="flex">
          <li 
            className="header__nav-items"
            onClick={() => isMobile && closeMobileNav()}
            >
            <Link 
              smooth to="#home"
              exact
              className={`${location.pathname}${location.hash}` === "/#home" ? "active nav-item" : "nav-item"}
            >
              Home
            </Link>
          </li>
          <li 
           className="header__nav-items"
           onClick={() => isMobile && closeMobileNav()}
           >
            <Link 
              className={`${location.pathname}${location.hash}` === "/#about" ? "active nav-item" : "nav-item"}
              smooth to="#about"
            >
              About
            </Link>
          </li>
          <li 
           className="header__nav-items"
           onClick={() => isMobile && closeMobileNav()}
           >
            <Link 
              className={`${location.pathname}${location.hash}` === "/#skills" ? "active nav-item" : "nav-item"}
              activeClassName="active"
              smooth to="#skills"
            >
              Skills
            </Link>
          </li>
          <li 
           className="header__nav-items"
           onClick={() => isMobile && closeMobileNav()}
           >
            <Link 
              className={`${location.pathname}${location.hash}` === "/#work" ? "active nav-item" : "nav-item"}
              activeClassName="active"
              smooth to="#work"
            >
              Work
            </Link>
          </li>
          <li 
           className="header__nav-items"
           onClick={() => isMobile && closeMobileNav()}
           >
            <Link 
              className={`${location.pathname}${location.hash}` === "/#blogs" ? "active nav-item" : "nav-item"}
              activeClassName="active"
              smooth to="#blogs"
            >
              Blogs
            </Link>
          </li>
          <li 
           className="header__nav-items"
           onClick={() => isMobile && closeMobileNav()}
           >
            <Link 
              className={`${location.pathname}${location.hash}` === "/#contact" ? "active nav-item" : "nav-item"}
              activeClassName="active"
              smooth to="#contact"
            >
              Contact
            </Link>
          </li>
        </ul>
    )
}

export default NavItems;
