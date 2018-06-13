import { Observable } from 'rxjs';
import {
  POSTS_GET_LIST,
  POSTS_GET_DETAILS,
  POSTS_CREATE,
  POSTS_DELETE, POSTS_UPDATE,
} from '../actions/posts/posts.actionsTypes';
import { restClient } from '../../restClient';

import {
  listPost,
  detailPost,
  createPost,
  deletePost,
  updatePost,
} from '../actions/posts/posts.actions';

export const getPostsListEpic = (action$, ...rest) => {
  return action$.ofType(POSTS_GET_LIST.START)
    .switchMap((action) => {
      return restClient.get('/posts')
        .map((response) => {
          if (response.status === 500) {
            throw response.message;
          }
          return listPost.success(response.data);
        });
    })
    .takeUntil(action$.ofType(listPost.canceled()))
    .catch((error) => {
      return Observable.of(listPost.error(error));
    });
};

export const getPostsDetailEpic = (action$, ...rest) => {
  return action$.ofType(POSTS_GET_DETAILS.START)
    .switchMap((action) => {
      return restClient.get(`/posts/${action.payload}`)
        .map((response) => {
          if (response.status === 500) {
            throw response.message;
          }
          return detailPost.success(response.data);
        });
    })
    .takeUntil(action$.ofType(detailPost.canceled()))
    .catch((error) => {
      return Observable.of(detailPost.error(error));
    });
};

export const createPostsEpic = (action$, ...rest) => {
  return action$.ofType(POSTS_CREATE.START)
    .switchMap((action) => {
      return restClient.post('/posts', action.payload)
        .map((response) => {
          if (response.status === 500) {
            throw response.message;
          }
          return createPost.success(response.data);
        });
    })
    .takeUntil(action$.ofType(createPost.canceled()))
    .catch((error) => {
      return Observable.of(createPost.error(error));
    });
};

export const updatePostsEpic = (action$, ...rest) => {
  return action$.ofType(POSTS_UPDATE.START)
    .switchMap((action) => {
      return restClient.patch(`/posts/${action.payload.id}`, action.payload)
        .map((response) => {
          if (response.status === 500) {
            throw response.message;
          }
          return updatePost.success(response.data);
        });
    })
    .takeUntil(action$.ofType(updatePost.canceled()))
    .catch((error) => {
      return Observable.of(updatePost.error(error));
    });
};

export const deletePostsEpic = (action$, ...rest) => {
  return action$.ofType(POSTS_DELETE.START)
    .switchMap((action) => {
      return restClient.delete(`/posts/${action.payload}`)
        .map((response) => {
          if (response.status === 500) {
            throw response.message;
          }
          return deletePost.success(response.data);
        });
    })
    .takeUntil(action$.ofType(deletePost.canceled()))
    .catch((error) => {
      return Observable.of(deletePost.error(error));
    });
};
