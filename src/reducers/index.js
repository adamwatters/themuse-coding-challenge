import { combineReducers } from 'redux'
import {
  UPDATE_APPLIED_FILTERS, REQUEST_POSTS, RECEIVE_POSTS, CHANGE_PAGE
} from '../actions'

const appliedFilters = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_APPLIED_FILTERS:
      const updaterObject = {}
      updaterObject[action.filterName] = action.filtersApplied
      return Object.assign({}, state, updaterObject)
    default:
      return state
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return true
    case RECEIVE_POSTS:
      return false
    default:
      return state
  }
}

const currentPage = (state = 0, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return action.pageNumber
    case UPDATE_APPLIED_FILTERS:
      return 0
    default:
      return state
  }
}

const pagesAvailable = (state = 0, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.pagesAvailable
    default:
      return state
  }
}

const posts = (state = [], action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return state
    case RECEIVE_POSTS:
      return action.posts
    // case CHANGE_PAGE:
    //   return []
    default:
      return state
  }
}

const rootReducer = combineReducers({
  isFetching,
  posts,
  currentPage,
  pagesAvailable,
  appliedFilters
})

export default rootReducer
