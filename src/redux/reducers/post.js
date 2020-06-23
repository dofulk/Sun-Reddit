
import { ADD_POST, ADD_COMMENT } from '../actionTypes'


const initialState = {
  postBody: {},
  comments: [
    {
      key: 1,
      comment: 'hello'
    },
  ]
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