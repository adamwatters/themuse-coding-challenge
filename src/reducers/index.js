import { combineReducers } from 'redux'

import appliedFilters from './appliedFilters'
import isFetching from './isFetching'
import currentPage from './currentPage'
import pagesAvailable from './pagesAvailable'
import posts from './posts'

const rootReducer = combineReducers({
  isFetching,
  posts,
  currentPage,
  pagesAvailable,
  appliedFilters
})

export default rootReducer
