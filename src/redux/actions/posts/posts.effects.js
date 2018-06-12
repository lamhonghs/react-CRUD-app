import axios from 'axios';
import { Observable } from 'rxjs';
import {
  POSTS_GET_LIST,
} from './posts.actionsTypes';
import {
  listPost,
} from './posts.actions';
import { BACKEND_URL } from '../../../constanst';

export const getPostsList = (action$, ...rest) => {
  const serviceGetPostsList = Observable.fromPromise(
    axios.get(BACKEND_URL + '/posts')
      .then((rp) => {return rp;})
      .catch(err => err)
  );
  return action$.ofType(POSTS_GET_LIST.START)
    .switchMap((action) => {
      return serviceGetPostsList
            .map((responses) => {
              return listPost.success(responses);
            });
        })
        .takeUntil(action$.ofType(listPost.canceled()))
        .catch((error) => {
          return Observable.of(listPost.error(error));
        });
};
