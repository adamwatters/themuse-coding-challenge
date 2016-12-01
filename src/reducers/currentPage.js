import {
  UPDATE_APPLIED_FILTERS, CHANGE_PAGE
} from '../constants/ActionTypes'

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

export default currentPage