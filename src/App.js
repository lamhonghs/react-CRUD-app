import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer,routerMiddleware } from 'react-router-redux';
import createHistory from "history/createBrowserHistory";

import './App.css';
import Header from './components/header/Header';
import PostsList from './components/posts/posts-list/PostsList';
import PostsDetails from './components/posts/posts-detail/PostsDetails';
import PostsCreate from './components/posts/posts-create/PostsCreate';
import {
  getPostsListEpic,
  getPostsDetailEpic,
  createPostsEpic,
  deletePostsEpic,
  updatePostsEpic,
} from './redux/effects/posts.effects';
import {
  posts,
} from './redux/reducers/posts.reducer';
import {
  loadingReducer,
} from './redux/reducers/loading.reducer';

import { reducer as formReducer } from 'redux-form';

const rootEpic = combineEpics(
  getPostsListEpic,
  getPostsDetailEpic,
  createPostsEpic,
  deletePostsEpic,
  updatePostsEpic,
);
export const rootReducer = combineReducers({
  posts,
  loadingReducer,
  form: formReducer,
  router: routerReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware(rootEpic);
const history = createHistory();
const routerMiddlewareRedux = routerMiddleware(history);

const store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware, routerMiddlewareRedux)
  )
);
class App extends PureComponent {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <ConnectedRouter history={history}>
            <div>
              <Header/>
              <Switch>
                <Route exact path="/" component={ PostsList }/>
                <Route path="/posts/:id(\d+)" component={ PostsDetails }/>
                <Route path="/posts/create" component={ PostsCreate }/>
                <Route path="/posts/edit/:id(\d+)" component={ PostsCreate }/>
              </Switch>
            </div>
          </ConnectedRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
