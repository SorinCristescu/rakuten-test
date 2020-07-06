import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieById } from '../../redux/movie/actions';

// Routing
import { withRouter, NavLink } from 'react-router-dom';

// Styles

import {
  ContainerInner,
  ImageWrapper,
  ImageContainer,
  MoreInfo,
  Description,
} from './style';

const Movie = (props) => {
  const line = useRef();
  const movieTitle = useRef();
  const movieDescription = useRef();
  const moreInfo = useRef();
  const imageEl = useRef();
  const imageWrapper = useRef();

  const movieId = props.match.params.id;
  const movie = useSelector((state) => state.movie.movie);
  const loadingMovie = useSelector((state) => state.movie.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMovies() {
      await dispatch(getMovieById(movieId));
    }
    fetchMovies();

    if (!loadingMovie && movie) {
      gsap.from([line.current], 1, {
        delay: 1.5,
        opacity: 0,
        x: 100,
        ease: 'back.easeOut',
      });

      gsap.from([movieTitle.current], 1, {
        delay: 0.4,
        opacity: 0,
        x: '100%',
        ease: 'back.easeOut',
      });

      gsap.from([movieDescription.current], 0.5, {
        delay: 1.3,
        opacity: 0,
        y: 50,
        ease: 'back.easeOut',
      });

      gsap.from([moreInfo.current], 1, {
        delay: 2,
        opacity: 0,
        y: 50,
        ease: 'back.easeOut',
      });
      gsap.from([imageWrapper.current], 1, {
        delay: 0,
        opacity: 0,
        x: '100%',
        ease: 'back.easeOut',
      });
      gsap.from([imageEl.current], 1, {
        delay: 0,
        scale: 1.8,
        ease: 'back.easeOut',
      });
    }
  }, [imageEl, imageWrapper, moreInfo, movieDescription, movieTitle, line]);
  const {
    actors,
    directors,
    duration,
    genres,
    images,
    plot,
    numerical_id,
    id,
    title,
    year,
  } = movie.data;
  return (
    <>
      <ContainerInner>
        <div className="main-content">
          <div className="main-headings">
            <p ref={line} className="by-line">
              Release Date: {year}
            </p>
            <div ref={movieTitle} className="heading">
              {/* <h1 className="heading1">{title}</h1> */}
            </div>
            <Description>
              <p ref={movieDescription}>{movie && plot}</p>
            </Description>
          </div>
          <MoreInfo ref={moreInfo}>
            <div className="actors-wrapper">
              <p>Genres: </p>
              {genres.map((genre, index) => {
                return (
                  <div key={index} className="actors-list">
                    <p>{genre.name}</p>
                  </div>
                );
              })}
            </div>
            <p>Duration: {duration}</p>
            <div className="actors-wrapper">
              <p>Actors: </p>
              <div className="list-container">
                {actors.map((actor, index) => {
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
                })}
              </div>
            </div>
            <div className="actors-wrapper">
              <p>Directors: </p>
              <div className="list-container">
                {directors.map((director, index) => {
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
                })}
              </div>
            </div>
            {/* <p>Rating: {vote_average}</p>
            <p>Vote count: {vote_count}</p> */}
          </MoreInfo>
        </div>
        <ImageWrapper ref={imageWrapper}>
          <NavLink to={`/trailer/${id}`}>
            <ImageContainer>
              <img
                ref={imageEl}
                className="image"
                src={images.artwork}
                alt="image"
              />
            </ImageContainer>
          </NavLink>
        </ImageWrapper>
      </ContainerInner>
    </>
  );
};

export default withRouter(Movie);
