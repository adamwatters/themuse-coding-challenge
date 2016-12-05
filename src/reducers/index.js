import { combineReducers } from 'redux'

import appliedFilters from './appliedFilters'
import currentPage from './currentPage'
import pagesAvailable from './pagesAvailable'
import posts from './posts'
import mostRecentRequest from './mostRecentRequest'

const rootReducer = combineReducers({
  mostRecentRequest,
  posts,
  currentPage,
  pagesAvailable,
  appliedFilters
})

export default rootReducer
