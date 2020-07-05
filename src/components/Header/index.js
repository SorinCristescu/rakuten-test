import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';

import Logo from '../../assets/logo/rakuten_logo.png';

// Styles
import { HeaderContainer, Navbar } from './style';

function Header() {
  const header = useRef();

  return (
    <HeaderContainer ref={header}>
      <Navbar>
        <NavLink to="/">
          <img src={Logo} alt="logo" />
        </NavLink>
      </Navbar>
    </HeaderContainer>
  );
}

export default Header;
