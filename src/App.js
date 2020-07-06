import React, { lazy, Suspense } from 'react';

import { Switch, Route } from 'react-router-dom';

// Lazy loading with code splitting.
const Home = lazy(() => import('./pages/Home'));
const Movie = lazy(() => import('./pages/Movie'));
const Trailer = lazy(() => import('./pages/Trailer'));

// Styles
import GlobalStyle from './globalStyle';

// Components
import ErrorBoundary from './components/ErrorBoundary';
import Loader from './components/Loader';
import Layout from './layout';

const App = () => {
  return (
    <div className="container">
      <GlobalStyle />
      <Layout>
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movie/:id" exact component={Movie} />
              <Route path="/trailer/:id" exact component={Trailer} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </div>
  );
};
export default App;
