import { createSelector, createStructuredSelector } from 'reselect';

const postsSelector = state => state.posts;
const generateSelector = key => createSelector(
  postsSelector,
  state => state[key],
);

const isFetchingPostsSelector = generateSelector('isFetching');
const postsListSelector = generateSelector('posts');

const structuredSelector = createStructuredSelector({
  isFetchingPosts: isFetchingPostsSelector,
  posts: postsListSelector,
});

export {
  structuredSelector as default,
};
