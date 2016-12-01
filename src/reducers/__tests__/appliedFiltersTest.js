import reducer from '../appliedFilters'
import * as actions from '../../actions/index'

describe('appliedFilters reducer', () => {
  it('should return an empty object for initial state', () => {

    expect(
      reducer(undefined, {})
    ).toEqual({})

  })

  it('should handle filter updates', () => {

    expect(
      reducer({}, actions.updateAppliedFilters('company', ["apple","microsoft"]))
    ).toEqual({company:["apple", "microsoft"]})

    expect(
      reducer({company:["apple", "microsoft"]}, actions.updateAppliedFilters('company', ["apple"]))
    ).toEqual({company:["apple"]})

    expect(
      reducer({company:["apple"]}, actions.updateAppliedFilters('category', ["sales"]))
    ).toEqual({
      company:["apple"],
      category:["sales"]
    })

  })
})