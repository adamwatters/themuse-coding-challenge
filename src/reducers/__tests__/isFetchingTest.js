import reducer from '../isFetching'
import * as types from '../../constants/ActionTypes'

describe('isFetching reducer', () => {
  it('should return false for the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(false)
  })
  it('should return true when posts are requested', () => {
    expect(
      reducer(false, {
        type: types.REQUEST_POSTS
      })
    ).toEqual(true)
  })
  it('should return false when posts are recieved', () => {
    expect(
      reducer(true, {
        type: types.RECEIVE_POSTS
      })
    ).toEqual(false)
  })
})