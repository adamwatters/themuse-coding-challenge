export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'

export const selectCategory = category => ({
  type: SELECT_CATEGORY,
  category
})

export const requestPosts = category => ({
  type: REQUEST_POSTS,
  category
})

export const receivePosts = (category, json) => ({
  type: RECEIVE_POSTS,
  category,
  posts: json.results.map(child => child)
})

const fetchPosts = category => dispatch => {
  dispatch(requestPosts(category))
  return fetch(`https://api-v2.themuse.com/jobs?category=${category}&page=1&api_key=640886a603fbf32faffa23a91e7d263ce9d47630d4d3d0b2434adce800ef01a1`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(category, json)))
}

const shouldFetchPosts = (state, category) => {
  if (state.posts && state.posts.isFetching) {
    return false
  }
  return true
}

export const fetchPostsIfNeeded = category => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), category)) {
    return dispatch(fetchPosts(category))
  }
}
