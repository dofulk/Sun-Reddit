import { ADD_POST,  ADD_COMMENT } from "./actionTypes"

export const addPost = content => ({
  type: ADD_POST,
  payload: content
});

export const addComment = content => ({
  type: ADD_COMMENT,
  payload: content
});