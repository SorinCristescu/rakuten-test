import React from 'react';

import Slider from 'react-slick';
import MovieCard from '../MovieCard';
import { CarouselContainer, CarouselBody, CarouselTitle } from './style';

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
  const { name, movies } = props.list;

  //   console.log('========================');
  //   console.log(props.list.data.name);
  //   console.log(movies);
  const settings = {
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 6,
    centerMode: 'true',
    centerPadding: '20px',
    autoplay: true,
    autoplaySpeed: 2000,
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
      <CarouselTitle>{name && name.data.name}</CarouselTitle>
      <CarouselBody>
        <Slider {...settings}>
          {movies &&
            movies.data.contents.data.map((movie) => (
              <MovieCard key={movie.numerical_id} movie={movie} />
            ))}
        </Slider>
      </CarouselBody>
    </CarouselContainer>
  );
};

export default Carousel;
