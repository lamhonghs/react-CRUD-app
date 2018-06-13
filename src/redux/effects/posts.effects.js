import {Observable} from 'rxjs';
import {
    POSTS_GET_LIST,
    POSTS_GET_DETAILS
} from '../actions/posts/posts.actionsTypes';
import {restClient} from '../../restClient';

import {
    listPost,
    detailPost
} from '../actions/posts/posts.actions';

export const getPostsList = (action$, ...rest) => {

    const serviceGetPostsList = () => {
        return Observable.fromPromise(
            restClient.get('/posts')
                .then(
                    (rp) => {
                        return rp;
                    },
                    ({response}) => {
                        return {
                            status: response.status,
                            message: response.statusText
                        };
                    }
                )
                .catch(err => err)
        );
    }
    return action$.ofType(POSTS_GET_LIST.START)
        .switchMap((action) => {
            return serviceGetPostsList()
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

export const getPostsDetail = (action$, ...rest) => {
    const serviceGetPostsDetail =  (url) => {
        return Observable.fromPromise(
            restClient.get(url)
                .then(
                    (rp) => {
                        return rp;
                    },
                    ({response}) => {
                        return {
                            status: response.status,
                            message: response.statusText
                        };
                    }
                )
                .catch(err => err)
        );
    };
    return action$.ofType(POSTS_GET_DETAILS.START)
        .switchMap((action) => {
            return serviceGetPostsDetail(`/posts/${action.payload}`)
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
