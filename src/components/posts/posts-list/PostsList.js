import React, {PureComponent} from 'react';
import {createStructuredSelector} from 'reselect';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    listPost,
} from '../../../redux/actions/posts/posts.actions';
import {
    errorSelector,
    loadingSelector,
    postsListSelector
} from '../../../redux/selectors/posts.selectors';
import './PostsList.css';

class PostsList extends PureComponent {
    componentDidMount() {
        this.props.listPostStart();
    }

    render() {
        const {
            posts,
            isFetchingPosts,
            error,
        } = this.props;
        if (isFetchingPosts) return <div>... loading .... </div>;
        if (error) return <div>... {error} .... </div>;
        return (
            <ul>
                {
                    posts.map(p => {
                        return (
                            <li key={p.id}>
                                <Link to={`posts/${p.id}`}> {p.title} </Link>
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

export const mapStateToProps = createStructuredSelector({
    isFetchingPosts: loadingSelector,
    posts: postsListSelector,
    error: errorSelector,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
