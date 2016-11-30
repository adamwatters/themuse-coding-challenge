export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const CHANGE_CATEGORY_SELECTION = 'CHANGE_CATEGORY_SELECTION'
export const UPDATE_APPLIED_FILTERS = 'UPDATE_APPLIED_FILTERS'

export const updateAppliedFilters = (filterName, filtersApplied) => ({
  type: UPDATE_APPLIED_FILTERS,
  filterName,
  filtersApplied
})

export const changeCategorySelection = categories => ({
  type: CHANGE_CATEGORY_SELECTION,
  categories
})

export const requestPosts = categories => ({
  type: REQUEST_POSTS,
  categories
})

export const receivePosts = (categories, json) => ({
  type: RECEIVE_POSTS,
  categories,
  posts: json.results.map(child => child)
})

const buildUrlString = categories => {
  const categoryParameterStrings = categories.reduce((parameterString, category) => {
    return parameterString.concat(`category=${encodeURIComponent(category)}&`);
  }, "")
  return `https://api-v2.themuse.com/jobs?${categoryParameterStrings}page=1&api_key=640886a603fbf32faffa23a91e7d263ce9d47630d4d3d0b2434adce800ef01a1`
}

const fetchPosts = categories => dispatch => {
  dispatch(requestPosts(categories))
  console.log(categories)
  console.log(buildUrlString(categories))
  return fetch(buildUrlString(categories))
    .then(response => response.json())
    .then(json => dispatch(receivePosts(categories, json)))
}

const shouldFetchPosts = (state, categories) => {
  if (state.posts && state.posts.isFetching) {
    return false
  }
  return true
}

export const fetchPostsIfNeeded = categories => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), categories)) {
    return dispatch(fetchPosts(categories))
  }
}
