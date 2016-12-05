import {
  RECEIVE_POSTS
} from '../constants/ActionTypes'

const defaultState = {
  items: [],
  requestedAt: 0
}

const posts = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return (action.requestedAt > state.requestedAt) ? 
        {items: action.posts, requestedAt: action.requestedAt} : state 
    default:
      return state
  }
}

export default posts