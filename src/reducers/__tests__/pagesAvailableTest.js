import reducer from '../pagesAvailable'
import * as types from '../../constants/ActionTypes'

describe('pagesAvailable reducer', () => {
  it('should return 0 for the state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(0)
  })
  it('should return the number of pages included in posts recieved action', () => {
    expect(
      reducer(0, {
        type: types.RECEIVE_POSTS,
        pagesAvailable: 10
      })
    ).toEqual(10)
  })
})