import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  listPost,
} from '../../../redux/actions/posts/posts.actions';
import postsSelector from '../posts.selectors';
import './PostsList.css';

class PostsList extends PureComponent {
  componentDidMount() {
    this.props.listPostStart();
  }

  render() {
    const {
      posts,
      isFetchingPosts,
    } = this.props;
    if(isFetchingPosts) return <div>... loading .... </div>;
    return (
      <ul>
        {
          posts.map(p => {
            return (
              <li key={ p.id }>
                <a href="/"> { p.title } </a>
              </li>
            )
          })
        }
      </ul>
    );
  }
}
export const mapDispatchToProps = (dispatch) => {
  return {
    listPostStart: () => {
      dispatch(listPost.start());
    },
  };
};
export default connect(postsSelector, mapDispatchToProps)(PostsList);
