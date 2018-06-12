import {
    POSTS_GET_LIST,
    POSTS_GET_DETAILS
} from '../actions/posts/posts.actionsTypes';

const initState = {
    error: null,
    posts: [],
    postsDetails: {}
};

export const posts = (state = initState,
                      action) => {
    switch (action.type) {
        case POSTS_GET_LIST.SUCCESS:
            return Object.assign({}, state, {
                posts: action.payload
            });
        case POSTS_GET_LIST.ERROR:
            return Object.assign({}, state, {
                error: action.error
            });
        case POSTS_GET_DETAILS.SUCCESS:
            return Object.assign({}, state, {
                postsDetails: action.payload
            });
        case POSTS_GET_DETAILS.ERROR:
            return Object.assign({}, state, {
                error: action.error
            });
        default:
            return initState
    }
};