import React, { useRef } from 'react';
import PropTypes from 'prop-types';

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

  const loaded = useSelector((state) => state.movie.loaded);
  const movie = useSelector((state) => state.movie.movie);

  const renderTitle = () => {
    if (props.location.pathname === '/') {
      return (
        <NavLink to="/">
          <img src={Logo} alt="logo" />
        </NavLink>
      );
    } else {
      return (
        <div className="svg-container">
          <NavLink to="/">
            <span style={{ fontSize: '20px', color: '#ffffff' }}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
          </NavLink>
          <h2>{loaded && movie.data.title}</h2>
        </div>
      );
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
