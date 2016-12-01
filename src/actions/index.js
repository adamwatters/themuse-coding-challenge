import * as types from '../constants/ActionTypes'
import buildSearchUrl from '../helpers/buildSearchUrl'

export const updateAppliedFilters = (filterName, filtersApplied) => ({
  type: types.UPDATE_APPLIED_FILTERS,
  filterName,
  filtersApplied
})

export const requestPosts = filtersApplied => ({
  type: types.REQUEST_POSTS
})

export const receivePosts = json => ({
  type: types.RECEIVE_POSTS,
  posts: json.results,
  pagesAvailable: json.page_count
})

export const changePage = pageNumber => ({
  type: types.CHANGE_PAGE,
  pageNumber
})

const fetchPosts = (filtersApplied, currentPage) => dispatch => {
  dispatch(requestPosts())
  return fetch(buildSearchUrl(filtersApplied, currentPage))
    .then(response => response.json())
    .then(json => dispatch(receivePosts(json)))
}

const shouldFetchPosts = (state) => {
  if (state.posts && state.posts.isFetching) {
    return false
  }
  return true
}

export const fetchPostsIfNeeded = (filtersApplied, currentPage) => (dispatch, getState) => {
  if (shouldFetchPosts(getState())) {
    return dispatch(fetchPosts(filtersApplied, currentPage))
  }
}
