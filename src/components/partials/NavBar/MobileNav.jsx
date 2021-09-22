import React from 'react';
import NavItems from './NavItems';

const MobileNav = ({ isMobile, closeMobileNav}) => {
    return (
        <nav className="hamburger-nav">
         <NavItems isMobile={isMobile} closeMobileNav={closeMobileNav}/>
        </nav>
        
    )
}

export default MobileNav;
