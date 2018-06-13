import {createSelector} from 'reselect';
import {createLoadingSelector} from "./loading.selectors";

const postsSelector = state => state.posts;
const generateSelector = key => createSelector(
    postsSelector,
    state => state[key],
);

export const errorSelector = generateSelector('error');
export const postsListSelector = generateSelector('posts');
export const postsDetailSelector = generateSelector('postsDetails');
export const loadingSelector = createLoadingSelector(['POSTS_GET_LIST', 'POSTS_CREATE_LIST',
  'POSTS_GET_DETAIL', 'POSTS_DELETE', 'POSTS_UPDATE']);
export const isSuccessSelector = generateSelector('isSuccess');
export const initialValuesSelector = generateSelector('postsDetails');
