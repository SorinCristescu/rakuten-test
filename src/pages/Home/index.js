import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  getPopularesEnTaquillaList,
  getEstrenosImprescindibleList,
  getTodaLaFamiliaList,
  getEstrenosSpaniolesList,
  getSiTePerdisteList,
} from '../../redux/lists/actions';

// Styles
import { PageContainer } from './style';

// Components
import Carousel from '../../components/Carousel';
import Loader from '../../components/Loader';
const Home = () => {
  const popularesMovies = useSelector((state) => state.lists.popularesMovies);
  const todaLaFamiliaMovies = useSelector(
    (state) => state.lists.todaLaFamiliaMovies
  );
  const estrenosSpaniolesMovies = useSelector(
    (state) => state.lists.estrenosSpaniolesMovies
  );
  const estrenosImprescindiblesMovies = useSelector(
    (state) => state.lists.estrenosImprescindiblesMovies
  );
  const siTuPerdisteMovies = useSelector(
    (state) => state.lists.siTuPerdisteMovies
  );
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

  const loading = useSelector((state) => state.lists.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchMovies() {
      await dispatch(getPopularesEnTaquillaList());
      await dispatch(getEstrenosImprescindibleList());
      await dispatch(getTodaLaFamiliaList());
      await dispatch(getEstrenosSpaniolesList());
      await dispatch(getSiTePerdisteList());
    }
    fetchMovies();
  }, []);
  if (
    loadedPopularesMovies &&
    loadedTodaLaFamiliaMovies &&
    loadedEstrenosSpaniolesMovies &&
    loadedEstrenosImprescindiblesMovies &&
    loadedSiTuPerdisteMovies
  ) {
    return (
      <PageContainer>
        <Carousel list={popularesMovies} />
        <Carousel list={todaLaFamiliaMovies} />
        <Carousel list={estrenosSpaniolesMovies} />
        <Carousel list={estrenosImprescindiblesMovies} />
        <Carousel list={siTuPerdisteMovies} />
      </PageContainer>
    );
  } else {
    return <Loader />;
  }
};

export default Home;
