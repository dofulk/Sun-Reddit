
import { ADD_POST, ADD_COMMENTS } from '../actionTypes'


const initialState = {
  postBody: {},
  comments: [
    {
      key: 1,
      comment: 'hi'
    },
    {
      key: 2,
      comment: 'hello',
    },
    {
      key: 3,
      comment: 'how'
    },
    {
      key: 4,
      comment: 'hi HAEKKJFDSLAJDSFKJ asdn,mcxxnvkjds;fa jahds;kj;lkdsajf;jdsa ;fjkdx,m.n'
    },
    {
      key: 5,
      comment: 'hi  this is a story all about how my life got turned right upside down'
    },
    {
      key: 6,
      comment: 'hi'
    },
    {
      key: 7,
      comment: 'hi'
    },
    {
      key: 8,
      comment: 'hi'
    },
    {
      key: 9,
      comment: 'hi'
    },
    {
      key: 10,
      comment: 'hi'
    },
    {
      key: 11,
      comment: 'hi'
    },
    {
      key: 12,
      comment: 'hi'
    },
    {
      key: 13,
      comment: 'hi'
    },
    {
      key: 14,
      comment: 'hi'
    },
    {
      key: 15,
      comment: 'hi  this is a story all about how my life got turned right upside down'
    },
    {
      key: 16,
      comment: 'hi  this is a story all about how my life got turned right upside down'
    },
    {
      key: 17,
      comment: 'hi  this is a story all about how my life got turned right upside down'
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return

    }
    case ADD_COMMENTS: {
      return
    }
    default:
      return state
  }

}