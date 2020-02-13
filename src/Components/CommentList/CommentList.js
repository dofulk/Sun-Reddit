import React from 'react'
import './CommentList.css'


const CommentList = (props) => {
  const comments = props.comments
  const listItems = comments.map(comment =>
    <li class="ListItem">{comment}</li>
  );

  return (
    <ul className="Comment-list">
      {listItems}
    </ul>
  )
};

export default CommentList