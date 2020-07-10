import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getMovieById } from '../../redux/movie/actions';

// Routing
import { withRouter, NavLink } from 'react-router-dom';

// Components
import Loader from '../../components/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

// Styles
import {
  ContainerInner,
  ImageWrapper,
  ImageContainer,
  MoreInfo,
  Description,
} from './style';

const Movie = (props) => {
  const movieId = props.match.params.id;
  const dispatch = useDispatch();
  const loaded = useSelector((state) => state.movie.loaded);
  const movie = useSelector((state) => state.movie.movie);

  useEffect(() => {
    async function fetchMovies() {
      await dispatch(getMovieById(movieId));
    }
    fetchMovies();
  }, []);

  if (!loaded) {
    return <Loader />;
  } else {
    const {
      actors,
      directors,
      duration,
      genres,
      images,
      plot,
      id,
      year,
    } = movie.data;
    return (
      <>
        <ContainerInner>
          <div className="main-content">
            <div className="main-headings">
              <p className="by-line">Release Date: {year}</p>
              <Description>
                <p>{movie && plot}</p>
              </Description>
            </div>
            <MoreInfo>
              <div className="actors-wrapper">
                <p>Genres: </p>
                <div className="list-container">
                  {genres.map((genre, index) => {
                    return (
                      <ul key={index} className="actors-list">
                        <li>
                          <p>{genre.name}</p>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </div>
              <p>Duration: {duration} min.</p>
              <div className="actors-wrapper">
                <p>Actors: </p>
                <div className="list-container">
                  {actors.map((actor, index) => {
                    if (actor.photo) {
                      return (
                        <div key={index} className="actors-list">
                          <img
                            className="actors-image"
                            src={actor.photo}
                            alt={actor.name}
                          />
                          <p className="name">{actor.name}</p>
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
              </div>
              <div className="actors-wrapper">
                <p>Directors: </p>
                <div className="list-container">
                  {directors.map((director, index) => {
                    if (director.photo) {
                      return (
                        <div key={index} className="actors-list">
                          <img
                            className="actors-image"
                            src={director.photo}
                            alt={director.name}
                          />
                          <p className="name">{director.name}</p>
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
              </div>
            </MoreInfo>
          </div>
          <ImageWrapper>
            <NavLink to={`/trailer/${id}`}>
              <ImageContainer>
                <img className="image" src={images.artwork} alt="image" />
                <div className="overlay">
                  <span style={{ fontSize: '150px', color: '#000000' }}>
                    <FontAwesomeIcon icon={faPlayCircle} />
                  </span>
                  <h3>SEE TRAILER</h3>
                </div>
              </ImageContainer>
            </NavLink>
          </ImageWrapper>
        </ContainerInner>
      </>
    );
  }
};

export default withRouter(Movie);
