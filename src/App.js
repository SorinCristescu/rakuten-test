import React, { lazy, Suspense } from 'react';

import { Switch, Route } from 'react-router-dom';

// Lazy loading with code splitting.
const Home = lazy(() => import('./pages/Home'));
const Movie = lazy(() => import('./pages/Movie'));

// Styles
import GlobalStyle from './globalStyle';

// Components
import ErrorBoundary from './components/ErrorBoundary';
import Loader from './components/Loader';
import Layout from './layout';

const App = () => (
  <div className="container">
    <GlobalStyle />
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie" exact component={Movie} />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  </div>
);

export default App;
