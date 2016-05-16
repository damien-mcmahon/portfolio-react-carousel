import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './components/Main';
import reducer from './reducers/index';
import Carousel from './components/Carousel';

const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));
const history = syncHistoryWithStore(browserHistory, store);

// Render the main component into the dom
render(
  <Provider store={store}>
		<Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Carousel} />
      </Route>
		</Router>
	</Provider>,
  document.getElementById('app')
);
