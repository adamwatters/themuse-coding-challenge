import { combineReducers } from 'redux'
import {
  UPDATE_APPLIED_FILTERS, CHANGE_CATEGORY_SELECTION, REQUEST_POSTS, RECEIVE_POSTS
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

const selectedCategories = (state = [], action) => {
  switch (action.type) {
    case CHANGE_CATEGORY_SELECTION:
      return action.categories
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

const posts = (state = [], action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return state
    case RECEIVE_POSTS:
      return action.posts
    default:
      return state
  }
}

const rootReducer = combineReducers({
  isFetching,
  posts,
  selectedCategories,
  appliedFilters
})

export default rootReducer
