import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import NavItems from './NavItems';
import MobileNav from './MobileNav';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [openhamburger, setOpenhamburger] = useState(false);


  const stickyHeader = () => {
    window.scrollY >= 150 ? setNavbar(true) : setNavbar(false)
  }

  window.addEventListener('scroll', stickyHeader);

  const closeMobileNav = () => {
    setOpenhamburger(false)
  };



  return(
    <>
    <header className={navbar ? "header header__active" : "header"}>
     <div className="container flex-between">
     
      <NavLink to="/">
         <h2 className="logo"> Vishakha</h2>
      </NavLink>
      <nav className="navbar-items">
        <NavItems />
      </nav>
      <div className="hamburger-container hidden">
      {openhamburger ? (
        <CgClose 
          className='hamburger-icon' 
          onClick={() => setOpenhamburger(!openhamburger)}
        />
      ) : (
        <GiHamburgerMenu 
          className='hamburger-icon' 
          onClick={() => setOpenhamburger(!openhamburger)}
        />
      )}
        
        {openhamburger && (
          <MobileNav isMobile={true} closeMobileNav={closeMobileNav}/>
        )}
      </div>
      </div>
    </header>
    </>
  )
  
};

export default Header;