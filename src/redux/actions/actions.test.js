import * as actions from './actions';
import * as types from './actionTypes';

describe ('actions', () => {
  it('should create an action to add a post', () => {
    const payload  = 'content'
    const expectedAction = {
      type: types.ADD_POST,
      payload
    }
    expect(actions.addPost(payload)).toEqual(expectedAction)
  });
  it('should create an action to add a comment', () => {
    const payload  = 'content'
    const expectedAction = {
      type: types.ADD_COMMENT,
      payload
    }
    expect(actions.addComment(payload)).toEqual(expectedAction)
  });
})