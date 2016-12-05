import reducer from '../posts'
import * as actions from '../../actions/index'

describe('posts reducer', () => {

  const defaultState = {
    items: [],
    requestedAt: 0
  }

  const otherState = {
    items: [1,2,3],
    requestedAt: 1000
  }

  it('should return an an object with attributes requestedAt and posts', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(defaultState)
  })

  it('should handle recieve post action with results array and requested at', () => {
    expect(
      reducer(defaultState, actions.receivePosts({results: [1,2,3]}, 1000))
    ).toEqual(otherState)
  })

  it("should not change state when the action's requestedAt is less recent than the state's", () => {
    expect(
      reducer(otherState, actions.receivePosts({results: [4,5,6]}, 500))
    ).toEqual({
      items: [1,2,3],
      requestedAt: 1000
    })
  })
})