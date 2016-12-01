import reducer from '../isFetching'
import * as actions from '../../actions/index'

describe('isFetching reducer', () => {
  it('should return false for the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(false)
  })
  it('should return true when posts are requested', () => {
    expect(
      reducer(false, actions.requestPosts({}))
    ).toEqual(true)
  })
  it('should return false when posts are recieved', () => {
    expect(
      reducer(true, actions.receivePosts({}))
    ).toEqual(false)
  })
})