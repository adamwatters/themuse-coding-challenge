import { combineReducers } from 'redux'
import {
  SELECT_CATEGORY, REQUEST_POSTS, RECEIVE_POSTS
} from '../actions'

const selectedCategory = (state = 'Engineering', action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.category
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
  selectedCategory
})

export default rootReducer
