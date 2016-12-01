import * as types from '../constants/ActionTypes'

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

const buildUrlString = (filtersApplied, currentPage) => {

  const filterParamString = Object.keys(filtersApplied).reduce((acc, filterName) => {
    return acc.concat(filtersApplied[filterName].reduce((acc, filter) => {
      return acc.concat(`${filterName}=${encodeURIComponent(filter)}&`)
    },''))
  },'')

  return `https://api-v2.themuse.com/jobs?${filterParamString}page=${currentPage}&api_key=640886a603fbf32faffa23a91e7d263ce9d47630d4d3d0b2434adce800ef01a1`
}

const fetchPosts = (filtersApplied, currentPage) => dispatch => {
  dispatch(requestPosts())
  return fetch(buildUrlString(filtersApplied, currentPage))
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
