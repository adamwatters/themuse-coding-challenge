import reducer from '../appliedFilters'
import * as types from '../../constants/ActionTypes'

describe('appliedFilters reducer', () => {
  it('should return an empty object for initial state', () => {

    expect(
      reducer(undefined, {})
    ).toEqual({})

  })

  it('should handle filter updates', () => {

    expect(
      reducer({}, {
        type: types.UPDATE_APPLIED_FILTERS,
        filterName: "companies",
        filtersApplied: ["apple","microsoft"]
      })
    ).toEqual({companies:["apple", "microsoft"]})

    expect(
      reducer({companies:["apple", "microsoft"]}, {
        type: types.UPDATE_APPLIED_FILTERS,
        filterName: "companies",
        filtersApplied: ["apple"]
      })
    ).toEqual({companies:["apple"]})

    expect(
      reducer({companies:["apple"]}, {
        type: types.UPDATE_APPLIED_FILTERS,
        filterName: "categories",
        filtersApplied: ["sales"]
      })
    ).toEqual({
      companies:["apple"],
      categories:["sales"]
    })

  })
})