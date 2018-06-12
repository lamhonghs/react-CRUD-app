import {
  POSTS_GET_LIST,
} from '../actions/posts/posts.actionsTypes';

export const posts = (
  state = {
    isFetching: false,
    error: null,
    posts: []
  },
  action
) => {
  switch (action.type) {
    case POSTS_GET_LIST.START:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case POSTS_GET_LIST.SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        posts: action.response
      });
    case POSTS_GET_LIST.ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        false: false,
        items: [],
        error: action.error
      });
    default:
      return state
  }
};