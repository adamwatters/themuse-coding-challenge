import {
  REQUEST_POSTS
} from '../constants/ActionTypes'

const mostRecentRequest = (state = 0, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return action.requestedAt
    default:
      return state
  }
}

export default mostRecentRequest