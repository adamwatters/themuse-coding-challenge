import reducer from '../posts'
import * as types from '../../constants/ActionTypes'

describe('todos reducer', () => {
  it('should return an empty array for the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([])
  })

  it('should handle recieve post action', () => {
    expect(
      reducer([], {
        type: types.RECEIVE_POSTS,
        posts: [1,2,3]
      })
    ).toEqual([1,2,3])
  })
})