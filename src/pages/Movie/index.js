import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieById } from '../../redux/movie/actions';

// Routing
import { withRouter, NavLink } from 'react-router-dom';

// Components
import Loader from '../../components/Loader';

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
  const movieDescription = useRef();
  const moreInfo = useRef();
  const imageEl = useRef();
  const imageWrapper = useRef();

  const movieId = props.match.params.id;
  const movie = useSelector((state) => state.movie.movie);
  const loaded = useSelector((state) => state.movie.loaded);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMovies() {
      await dispatch(getMovieById(movieId));
    }
    fetchMovies();

    gsap.from([line.current], 1, {
      delay: 1.5,
      opacity: 0,
      x: 100,
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
  }, [imageEl, imageWrapper, moreInfo, movieDescription, line]);

  if (loaded) {
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
              <p ref={line} className="by-line">
                Release Date: {year}
              </p>
              <Description>
                <p ref={movieDescription}>{movie && plot}</p>
              </Description>
            </div>
            <MoreInfo ref={moreInfo}>
              <div className="actors-wrapper">
                <p>Genres: </p>
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
              <p>Duration: {duration} min.</p>
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
                <div className="overlay">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <path
                          d="M437.019,74.98C388.667,26.628,324.38,0,256,0C187.619,0,123.331,26.629,74.98,74.98C26.628,123.332,0,187.62,0,256
			s26.628,132.668,74.98,181.02C123.331,485.371,187.619,512,256,512c68.38,0,132.667-26.628,181.019-74.98
			C485.371,388.667,512,324.38,512,256S485.371,123.333,437.019,74.98z M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30
			s226,101.383,226,226S380.617,482,256,482z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M400.886,243.52l-192.8-128.535c-4.603-3.068-10.52-3.355-15.398-0.744c-4.877,2.61-7.922,7.693-7.922,13.225v257.066
			c0,5.532,3.045,10.615,7.922,13.225c2.218,1.187,4.65,1.775,7.077,1.775c2.91,0,5.812-0.846,8.321-2.519l192.8-128.532
			c4.173-2.782,6.68-7.466,6.68-12.481C407.565,250.986,405.059,246.302,400.886,243.52z M214.765,356.506V155.495l150.758,100.506
			L214.765,356.506z"
                        />
                      </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                  <h3>SEE TRAILER</h3>
                </div>
              </ImageContainer>
            </NavLink>
          </ImageWrapper>
        </ContainerInner>
      </>
    );
  } else {
    return <Loader />;
  }
};

export default withRouter(Movie);
