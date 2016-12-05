import reducer from '../mostRecentRequest'
import * as types from '../../constants/ActionTypes'
import * as actions from '../../actions/index'

describe('mostRecentRequest reducer', () => {
  it('should return 0 for the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(0)
  })
  it('should hande request post action by setting state to action.requestedAt', () => {
    const timeStamp = Date.now()
    expect(
      reducer(0, actions.requestPosts(timeStamp))
    ).toEqual(timeStamp)
  })
})