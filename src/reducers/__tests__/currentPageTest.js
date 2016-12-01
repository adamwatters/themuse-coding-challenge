import reducer from '../currentPage'
import * as types from '../../constants/ActionTypes'

describe('currentPage reducer', () => {
  it('should return 0 for initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(0)
  })
  it('should handle page updates', () =>{
    expect(
      reducer(0, {
        type: types.CHANGE_PAGE,
        pageNumber: 1
      })
    ).toEqual(1)
  })
  it('should return 0 when filters settings are changed', () =>{
    expect(
      reducer(1, {
        type: types.UPDATE_APPLIED_FILTERS,
        filterName: "companies",
        filtersApplied: ["apple","microsoft"]
      })
    ).toEqual(0)
  })
})