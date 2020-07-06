import React from 'react';
import PropTypes from 'prop-types';

// Routing
import { NavLink, withRouter } from 'react-router-dom';

// Styles
import { Card, Overlay, CardFooter, CardBody, Score, Votes } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const MovieCard = ({ movie }) => {
  const { images, highlighted_score } = movie;
  const { formatted_amount_of_votes, score } = highlighted_score;

  return (
    <Card>
      <NavLink to={'/movie/' + movie.id}>
        <CardBody>
          <img src={images.artwork} />
          <Overlay>
            <p>
              Show
              <br />
              details
            </p>
          </Overlay>
        </CardBody>
      </NavLink>
      <CardFooter>
        <span style={{ fontSize: '14px', color: '#fdeb48' }}>
          <FontAwesomeIcon icon={faStar} />
        </span>
        <Votes>{formatted_amount_of_votes}</Votes>
        <span style={{ fontSize: '14px', color: '#ffffff' }}>
          <FontAwesomeIcon icon={faUser} />
        </span>
        <Score>{score}</Score>
      </CardFooter>
    </Card>
  );
};

// Runtime props type checking
MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default withRouter(MovieCard);
