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
  if (!loadingList) {
    return (
      <PageContainer>
        <Carousel list={popularesMovies} />
        <Carousel list={todaLaFamiliaMovies} />
        <Carousel list={estrenosSpaniolesMovies} />
        <Carousel list={nuestraPreferidasMovies} />
        <Carousel list={estrenosImprescindiblesMovies} />
      </PageContainer>
    );
  } else {
    return null;
  }
};

export default Home;
