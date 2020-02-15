import React from 'react'
import './Surface.css'
import CommentList from '../CommentList/CommentList'

const Surface = (props) => {

  return (
    <div className="Surface">
      <div className="Content">
      <h1>{props.title}</h1>
      <div className="Body">
      {props.body}
      </div>
      </div>
      <div className="Comments">
        <CommentList comments={props.comments}/>
      </div>
    </div>
  )
}

export default Surface