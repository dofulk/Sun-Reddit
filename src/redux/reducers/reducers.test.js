import postReducer from './post';
import * as types from '../actions/actionTypes';

describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(postReducer(undefined, {})).toEqual(
      {
        postBody: {},
        comments: []
      }
    )
  })
  it('should handle ADD_COMMENT', () => {
    expect(
      postReducer(undefined, {
        type: types.ADD_COMMENT,
        payload: {
          key: 1,
          comment: 'Test comment'
        }
      })
    ).toEqual(
      {
        postBody: {},
        comments: [
          {
            key: 1,
            comment: 'Test comment'
          }
        ]
      })
    expect(
      postReducer(
        {
          postBody: {},
          comments: [
            {
              key: 2,
              comment: 'Test comment 2'
            }
          ]
        }
        , {
          type: types.ADD_COMMENT,
          payload: {
            key: 1,
            comment: 'Test comment'
          }
        })
    ).toEqual(
      {
        postBody: {},
        comments: [
          {
            key: 2,
            comment: 'Test comment 2'
          },
          {
            key: 1,
            comment: 'Test comment'
          }
        ]
      })
  })
})