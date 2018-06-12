import React, { PureComponent } from 'react';
import './Header.css';

class Header extends PureComponent {
  newPostClick = () => {
    alert('click');
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

export default Header;
