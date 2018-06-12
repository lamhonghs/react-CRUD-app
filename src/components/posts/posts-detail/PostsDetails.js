import React, { PureComponent } from 'react';
import './PostsDetails.css';

class PostsDetails extends PureComponent {
  render() {
    const {
      post,
    } = this.props;
    return (
      <div>
        <h1> { post.title } </h1>
        <p>
          { post.description }
        </p>
      </div>
    );
  }
}

export default PostsDetails;
