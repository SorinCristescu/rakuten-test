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

// Components
import Carousel from '../../components/Carousel';

const Home = () => {
  const popularesMovies = useSelector((state) => state.lists.popularesMovies);
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
  const loadingList = useSelector((state) => state.lists.loading);

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

  return (
    <PageContainer>
      <Carousel list={!loadingList && popularesMovies} />
      <Carousel list={!loadingList && todaLaFamiliaMovies} />
      <Carousel list={!loadingList && estrenosSpaniolesMovies} />
      <Carousel list={!loadingList && nuestraPreferidasMovies} />
      <Carousel list={!loadingList && estrenosImprescindiblesMovies} />
    </PageContainer>
  );
};

export default Home;
