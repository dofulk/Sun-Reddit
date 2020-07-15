
import { ADD_POST, ADD_COMMENT } from '../actions/actionTypes'


const initialState = {
  postBody: {},
  comments: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return

    }
    case ADD_COMMENT: {
      return Object.assign({}, state, {
        comments: [
          ...state.comments,
          {
            key: action.payload.key,
            comment: action.payload.comment
          }
        ]
      })
    }
    default:
      return state
  }

}