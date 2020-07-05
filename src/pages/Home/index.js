import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  getPopularesEnTaquillaList,
  getEstrenosImprescindibleList,
  getTodaLaFamiliaList,
  getEstrenosSpaniolesList,
  getNuestraPreferidasList,
} from '../../redux/lists/actions';

// Styles
import { PageContainer } from './style';

const Home = () => {
  const popularMovies = useSelector((state) => state.lists.popularMovies);
  const todaLaFamiliaMovies = useSelector(
    (state) => state.lists.todaLaFamiliaMovies
  );
  const estrenosSpaniolesMovies = useSelector(
    (state) => state.lists.estrenosSpaniolesMovies
  );
  const nuestraPreferidasMovies = useSelector(
    (state) => state.lists.nuestraPreferidasMovies
  );
  const estrenosImprescindiblesMovies = useSelector(
    (state) => state.lists.estrenosImprescindiblesMovies
  );

  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchMovies() {
      await dispatch(getPopularesEnTaquillaList());
      await dispatch(getEstrenosImprescindibleList());
      await dispatch(getTodaLaFamiliaList());
      await dispatch(getEstrenosSpaniolesList());
      await dispatch(getNuestraPreferidasList());
    }
    fetchMovies();
  }, []);
  console.log(popularMovies);
  return (
    <PageContainer>
      <h1>Home page</h1>
    </PageContainer>
  );
};

export default Home;
