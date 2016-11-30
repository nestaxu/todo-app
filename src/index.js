import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './configureStore';
import todoApp from './reducers';
import App from './components/App';

const store = configureStore(todoApp);

render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/(:categoryName)" component={ App } />
    </Router>
  </Provider>,
  document.getElementById('root')
);
