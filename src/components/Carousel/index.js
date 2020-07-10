import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
// Components
import Slider from 'react-slick';
import MovieCard from '../MovieCard';
import { CarouselContainer, CarouselBody, CarouselTitle } from './style';

// Carousel arrow buttons
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

const Carousel = (props) => {
  const loadedPopularesMovies = useSelector(
    (state) => state.lists.loadedPopularesMovies
  );
  const loadedTodaLaFamiliaMovies = useSelector(
    (state) => state.lists.loadedTodaLaFamiliaMovies
  );
  const loadedEstrenosSpaniolesMovies = useSelector(
    (state) => state.lists.loadedEstrenosSpaniolesMovies
  );
  const loadedEstrenosImprescindiblesMovies = useSelector(
    (state) => state.lists.loadedEstrenosImprescindiblesMovies
  );
  const loadedSiTuPerdisteMovies = useSelector(
    (state) => state.lists.loadedSiTuPerdisteMovies
  );
  const settings = {
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 6,
    centerMode: 'true',
    centerPadding: '20px',
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    pauseOnHover: true,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (
    loadedPopularesMovies &&
    loadedTodaLaFamiliaMovies &&
    loadedEstrenosSpaniolesMovies &&
    loadedEstrenosImprescindiblesMovies &&
    loadedSiTuPerdisteMovies
  ) {
    const title = props.list.data.name;
    const movies = props.list.data.contents.data;
    return (
      <CarouselContainer>
        <CarouselTitle>{title}</CarouselTitle>
        <CarouselBody>
          <Slider {...settings}>
            {movies.map((movie) => (
              <MovieCard key={movie.numerical_id} movie={movie} />
            ))}
          </Slider>
        </CarouselBody>
      </CarouselContainer>
    );
  } else {
    return null;
  }
};

// Runtime props type checking
Carousel.propTypes = {
  list: PropTypes.object.isRequired,
};

export default Carousel;
