import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Movie from './pages/Movie';

const App = () => (
  <div className="container">
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/movie" exact component={Movie} />
    </Switch>
  </div>
);

export default App;
