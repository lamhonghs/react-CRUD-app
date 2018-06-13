import {
  POSTS_CREATE,
  POSTS_GET_DETAILS,
  POSTS_GET_LIST,
  POSTS_DELETE,
  POSTS_UPDATE, PORTS_CLEAR_CACHE,
} from './posts.actionsTypes';

export const listPost = {
  start: (payload) => {
    return {
      type: POSTS_GET_LIST.START,
      payload,
    }
  },
  success: (data) => {
    return {
      type: POSTS_GET_LIST.SUCCESS,
      payload: data
    }
  },
  canceled: (error) => {
    return {
      type: POSTS_GET_LIST.CANCEL,
      error: error
    }
  },
  error: (error) => {
    return {
      type: POSTS_GET_LIST.ERROR,
      error: error
    }
  },
};

export const detailPost = {
  start: (payload) => {
    return {
      type: POSTS_GET_DETAILS.START,
      payload,
    }
  },
  success: (data) => {
    return {
      type: POSTS_GET_DETAILS.SUCCESS,
      payload: data
    }
  },
  canceled: (error) => {
    return {
      type: POSTS_GET_DETAILS.CANCEL,
      error: error
    }
  },
  error: (error) => {
    return {
      type: POSTS_GET_DETAILS.ERROR,
      error: error
    }
  },
};

export const createPost = {
  start: (payload) => {
    return {
      type: POSTS_CREATE.START,
      payload,
    }
  },
  success: (data) => {
    return {
      type: POSTS_CREATE.SUCCESS,
      payload: data
    }
  },
  canceled: (error) => {
    return {
      type: POSTS_CREATE.CANCEL,
      error: error
    }
  },
  error: (error) => {
    return {
      type: POSTS_CREATE.ERROR,
      error: error
    }
  },
};

export const deletePost = {
  start: (payload) => {
    return {
      type: POSTS_DELETE.START,
      payload,
    }
  },
  success: (data) => {
    return {
      type: POSTS_DELETE.SUCCESS,
      payload: data
    }
  },
  canceled: (error) => {
    return {
      type: POSTS_DELETE.CANCEL,
      error: error
    }
  },
  error: (error) => {
    return {
      type: POSTS_DELETE.ERROR,
      error: error
    }
  },
};

export const updatePost = {
  start: (payload) => {
    return {
      type: POSTS_UPDATE.START,
      payload,
    }
  },
  success: (data) => {
    return {
      type: POSTS_UPDATE.SUCCESS,
      payload: data
    }
  },
  canceled: (error) => {
    return {
      type: POSTS_UPDATE.CANCEL,
      error: error
    }
  },
  error: (error) => {
    return {
      type: POSTS_UPDATE.ERROR,
      error: error
    }
  },
};

export const postClearCache = () => {
  return {
    type: PORTS_CLEAR_CACHE,
  }
}