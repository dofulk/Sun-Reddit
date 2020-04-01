import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { List } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';



const CommentList = (props) => {
  const comments = props.comments
  const listItems = comments.map(comment =>
    <React.Fragment key={comment.key}>
      <ListItem button>
        <ListItemText primary={comment.comment}/>

      </ListItem>
      <Divider />
    </React.Fragment>
  );

  return (
    <List>
      {listItems}
    </List>
  )
};

export default CommentList