import React, { PropTypes } from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { compose, combineReducers, createStore, applyMiddleware } from 'redux';
import * as pages from './pages';
import * as stores from './store';
import * as containers from './containers';
import { VisibilityFilters } from './constants';

import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import createLogger from 'redux-logger';

import { addNews, completeTodo, setVisibilityFilter } from './actions/news'

import newsApp from './reducers/news';

const {
    Home,
    DefaultHandler,
    } = pages;

const {
    App,
    } = containers;

// You can use all of them! (It doesn?t mean you should.)
let createStoreWithMiddleware;

if (process.env.NODE_ENV === 'development') {
  createStoreWithMiddleware = compose(applyMiddleware(
      thunk,
      promiseMiddleware,
      createLogger()
  ))(createStore);
} else {
  createStoreWithMiddleware = compose(applyMiddleware(
      thunk,
      promiseMiddleware
  ))(createStore);
}

const store = createStoreWithMiddleware(newsApp);


export default class Root extends React.Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  render() {
    const { history } = this.props;

    return (
        <Provider store={store}>
          <Router history={history}>
            <Route component={App}>
              {/* russian version */}
              <Route path="*" component={Home}/>
            </Route>
          </Router>
        </Provider>
    );
  }
}
