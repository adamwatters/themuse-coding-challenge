import reducer from '../currentPage'
import * as actions from '../../actions/index'

describe('currentPage reducer', () => {
  it('should return 0 for initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(0)
  })
  it('should handle page updates', () =>{
    expect(
      reducer(0, actions.changePage(1))
    ).toEqual(1)
  })
  it('should return 0 when filters settings are changed', () =>{
    expect(
      reducer(1, actions.updateAppliedFilters('company', ["apple","microsoft"]))
    ).toEqual(0)
  })
})