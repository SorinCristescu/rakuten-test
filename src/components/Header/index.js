import React, { useEffect, useRef, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import gsap from 'gsap';
import { useSelector, useDispatch } from 'react-redux';

import Logo from '../../assets/logo/rakuten_logo.png';

// Styles
import { HeaderContainer, Navbar } from './style';

function Header(props) {
  const header = useRef();
  const movie = useSelector((state) => state.movie.movie);
  const loading = useSelector((state) => state.movie.loading);
  const [id, setId] = useState(null);

  useEffect(() => {
    if (movie.data) {
      setId(movie.data.id);
    }
  }, []);

  return (
    <HeaderContainer ref={header}>
      <Navbar>
        {movie.data && props.location.pathname === `/movie/${movie.data.id}` ? (
          <NavLink to="/">
            <h1>{movie.data.title}</h1>
          </NavLink>
        ) : (
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        )}
      </Navbar>
    </HeaderContainer>
  );
}

export default withRouter(Header);
