import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { useSelector } from 'react-redux';

// Routing
import { NavLink, withRouter } from 'react-router-dom';

// Components
import Logo from '../../assets/logo/rakuten_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// Styles
import { HeaderContainer, Navbar } from './style';

const Header = (props) => {
  const header = useRef();
  const movie = useSelector((state) => state.movie.movie);
  const loaded = useSelector((state) => state.movie.loaded);

  const renderTitle = () => {
    if (loaded) {
      if (
        props.location.pathname === `/movie/${movie.data.id}` ||
        props.location.pathname === `/trailer/${movie.data.id}`
      ) {
        console.log('header', props);
        return (
          <div className="svg-container">
            <NavLink to="/">
              <span style={{ fontSize: '20px', color: '#ffffff' }}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </span>
            </NavLink>
            <h2>{movie.data.title}</h2>
          </div>
        );
      } else {
        return (
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        );
      }
    }
  };
  return (
    <HeaderContainer ref={header}>
      <Navbar>{renderTitle()}</Navbar>
    </HeaderContainer>
  );
};

// Runtime props type checking
Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Header);
