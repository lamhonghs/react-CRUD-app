import React, {PureComponent} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {combineEpics} from 'redux-observable';
import {combineReducers} from 'redux';
import {Provider} from 'react-redux';

import './App.css';
import Header from './components/header/Header'
import PostsList from './components/posts/posts-list/PostsList'
import PostsDetails from './components/posts/posts-detail/PostsDetails'
import {
    getPostsList,
    getPostsDetail,
} from './redux/effects/posts.effects';
import {
    posts,
} from './redux/reducers/posts.reducer';
import {
    loadingReducer,
} from './redux/reducers/loading.reducer';

const rootEpic = combineEpics(
    getPostsList,
    getPostsDetail,
);
export const rootReducer = combineReducers({
    posts,
    loadingReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware(rootEpic);
const store = createStore(rootReducer,
    composeEnhancers(
        applyMiddleware(epicMiddleware)
    )
);

class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Header/>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={PostsList}/>
                            <Route path="/posts/:id" component={PostsDetails}/>
                        </Switch>
                    </Router>
                </div>
            </Provider>
        );
    }
}

export default App;
