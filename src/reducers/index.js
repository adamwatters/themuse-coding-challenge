import { combineReducers } from 'redux'
import {
  CHANGE_CATEGORY_SELECTION, REQUEST_POSTS, RECEIVE_POSTS
} from '../actions'

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
  selectedCategories
})

export default rootReducer
