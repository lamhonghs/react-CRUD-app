import React, { PureComponent } from 'react';
import {
  push
} from 'react-router-redux';
import { connect } from 'react-redux';
import './Header.css';
import { postClearCache } from '../../redux/actions/posts/posts.actions';

class Header extends PureComponent {
  newPostClick = () => {
    this.props.postClearCache();
    this.props.goToCreatePage();
  }
  render() {
    return (
      <header className="header-wrapper">
        <button className="header-button-action" onClick={this.newPostClick}>
          New Post
        </button>
      </header>
    );
  }
}

export default connect(null, (dispatch) => {
  return {
    goToCreatePage: () => {
      dispatch(push({
        pathname: '/posts/create'
      }))
    },
    postClearCache: () => {
      dispatch(postClearCache());
    },
  }
})(Header);
