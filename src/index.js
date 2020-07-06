import React from 'react';
import ReactDOM from 'react-dom';
// Routing
import { HashRouter as Router } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';
import { persistor } from './redux/store';

// Components
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
