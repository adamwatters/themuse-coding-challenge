import reducer from '../posts'
import * as actions from '../../actions/index'

describe('posts reducer', () => {
  it('should return an empty array for the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([])
  })

  it('should handle recieve post action', () => {
    expect(
      reducer([], actions.receivePosts({results: [1,2,3]}))
    ).toEqual([1,2,3])
  })
})