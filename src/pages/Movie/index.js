import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getMovieById } from '../../redux/movie/actions';

// Styles
import { PageContainer } from './style';
function Movie() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchMovies() {
      await dispatch(getMovieById('the-gentlemen-los-senores-de-la-mafia'));
    }
    fetchMovies();
  }, []);
  return (
    <PageContainer>
      <h1>Movie page</h1>
    </PageContainer>
  );
}

export default Movie;
