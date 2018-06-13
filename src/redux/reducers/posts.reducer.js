import {
  POSTS_GET_LIST,
  POSTS_GET_DETAILS,
  POSTS_CREATE,
  POSTS_DELETE,
  POSTS_UPDATE, PORTS_CLEAR_CACHE,
} from '../actions/posts/posts.actionsTypes';

const initState = {
  error: null,
  posts: [],
  postsDetails: {},
  isSuccess: false,
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
    case POSTS_CREATE.START:
    case POSTS_DELETE.START:
    case POSTS_UPDATE.START:
      return Object.assign({}, state, {
        isSuccess: false
      });
    case POSTS_CREATE.SUCCESS:
    case POSTS_DELETE.SUCCESS:
    case POSTS_UPDATE.SUCCESS:
      return Object.assign({}, state, {
        isSuccess: true
      });
    case POSTS_CREATE.ERROR:
    case POSTS_DELETE.ERROR:
    case POSTS_UPDATE.ERROR:
      return Object.assign({}, state, {
        error: action.error,
        isSuccess: false
      });
    case PORTS_CLEAR_CACHE:
      return initState;
    default:
      return state
  }
};