import * as types from '../constants/ActionTypes'
import buildSearchUrl from '../helpers/buildSearchUrl'

export const updateAppliedFilters = (filterName, filtersApplied) => ({
  type: types.UPDATE_APPLIED_FILTERS,
  filterName,
  filtersApplied
})

export const requestPosts = requestedAt => ({
  type: types.REQUEST_POSTS,
  requestedAt
})

export const receivePosts = (json, requestedAt) => ({
  type: types.RECEIVE_POSTS,
  posts: json.results,
  pagesAvailable: json.page_count,
  requestedAt
})

export const changePage = pageNumber => ({
  type: types.CHANGE_PAGE,
  pageNumber
})

export const fetchPosts = (filtersApplied, currentPage) => dispatch => {
  const requestedAt = Date.now()
  dispatch(requestPosts(requestedAt))
  return fetch(buildSearchUrl(filtersApplied, currentPage))
    .then(response => response.json())
    // temporarily simulating a slow response over the network
    .then(json => new Promise(resolve => setTimeout(() => resolve(json), 1000)))
    .then(json => dispatch(receivePosts(json, requestedAt)))
}
