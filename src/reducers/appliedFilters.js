import {
  UPDATE_APPLIED_FILTERS
} from '../constants/ActionTypes'

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

export default appliedFilters