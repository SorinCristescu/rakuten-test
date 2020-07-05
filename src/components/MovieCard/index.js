import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Card, Overlay, CardFooter, CardBody, Score, Votes } from './style';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import { faStar } from '@fortawesome/free-solid-svg-icons';

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
        {/* <FontAwesomeIcon icon={faStar} color="#fdeb48" /> */}
        <Votes>{formatted_amount_of_votes}</Votes>
        {/* <FontAwesomeIcon icon={faUser} color="#ffffff" /> */}
        <Score>{score}</Score>
      </CardFooter>
    </Card>
  );
};

export default withRouter(MovieCard);
