import React from 'react';
import PropTypes from 'prop-types';

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
  const title = props.list.data.name;
  const movies = props.list.data.contents.data;
  console.log('carousel', props);
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
          slidesToShow: 8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
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
};

// Runtime props type checking
Carousel.propTypes = {
  list: PropTypes.object.isRequired,
};

export default Carousel;
