import {
  REQUEST_POSTS, RECEIVE_POSTS
} from '../constants/ActionTypes'

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

export default isFetching