import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './PostsDetails.css';
import {
    errorSelector,
    loadingSelector,
    postsDetailSelector
} from "../../../redux/selectors/posts.selectors";
import {detailPost} from "../../../redux/actions/posts/posts.actions";

class PostsDetails extends PureComponent {
    componentDidMount() {
        const {
            match: {params: {id}},
        } = this.props;
        this.props.detailPostStart({
            payload: id
        });
    }

    render() {
        const {
            post,
        } = this.props;
        return (
            <div>
                <h1> {post.title} </h1>
                <p>
                    {post.description}
                </p>
            </div>
        );
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        detailPostStart: () => {
            dispatch(detailPost.start());
        },
    };
};

export const mapStateToProps = createStructuredSelector({
        isFetchingPosts: loadingSelector,
        post: postsDetailSelector,
        error: errorSelector,
    })
;

export default connect(mapStateToProps, mapDispatchToProps)(PostsDetails);