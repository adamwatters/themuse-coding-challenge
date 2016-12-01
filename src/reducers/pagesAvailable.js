import {
  RECEIVE_POSTS
} from '../constants/ActionTypes'

const pagesAvailable = (state = 0, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.pagesAvailable
    default:
      return state
  }
}

export default pagesAvailable