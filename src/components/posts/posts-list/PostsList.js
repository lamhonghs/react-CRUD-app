import React, { PureComponent } from 'react';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import {
  push
} from 'react-router-redux';

import { Link } from 'react-router-dom';
import {
  listPost,
  deletePost, postClearCache,
} from '../../../redux/actions/posts/posts.actions';
import {
  errorSelector,
  loadingSelector,
  postsListSelector,
  isSuccessSelector,
} from '../../../redux/selectors/posts.selectors';
import './PostsList.css';

class PostsList extends PureComponent {

  componentWillReceiveProps(nextProps) {
    if (nextProps.isDeleteSuccess !== this.props.isDeleteSuccess && nextProps.isDeleteSuccess) {
      this.props.listPostStart();
    }
  }

  componentDidMount() {
    this.props.listPostStart();
  }

  componentWillUnmount() {
    this.props.postClearCache();
  }

  deletePost = (id) => {
    this.props.deletePostStart(id);
  }

  goEditPage = (id) => {
    this.props.goEditPage(id);
  }

  renderTable = () => {
    const {
      posts,
    } = this.props;
    return (
      <table className="table table-striped bordered">
        {
          posts.map(p => {
            return (
              <tr key={ p.id }>
                <td>
                  <Link to={ `posts/${p.id}` }> { p.title } </Link>
                </td>
                <td>
                  <button onClick={ () => this.deletePost(p.id) } style={ {
                    marginRight: 30,
                    marginLeft: 30,
                  } }>
                    Delete
                  </button>
                  <button onClick={ () => this.goEditPage(p.id) } style={ {
                    marginRight: 30
                  } }>
                    Edit
                  </button>
                </td>
              </tr>
            )
          })
        }
      </table>
    )
  }

  render() {
    const {
      isFetchingPosts,
      error,
    } = this.props;
    if (isFetchingPosts) return <div>... loading .... </div>;
    if (error) return <div>... { error } .... </div>;
    return (
      this.renderTable()
    );
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    listPostStart: () => {
      dispatch(listPost.start());
    },
    deletePostStart: (payload) => {
      dispatch(deletePost.start(payload));
    },
    goEditPage: (payload) => {
      dispatch(push({
        pathname: `/posts/edit/${payload}`
      }))
    },
    postClearCache: () => {
      dispatch(postClearCache());
    },
  };
};

export const mapStateToProps = createStructuredSelector({
  isFetchingPosts: loadingSelector,
  posts: postsListSelector,
  error: errorSelector,
  isDeleteSuccess: isSuccessSelector,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
