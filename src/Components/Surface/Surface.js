import React from 'react';
import './Surface.css';
import CommentList from '../CommentList/CommentList';
import Box from '@material-ui/core/Box';

const Surface = (props) => {


  return (
    <div className="Surface">
        <h1>{props.title}</h1>
        <Box className="Body">
          {props.body}
        </Box>
      <Box className="Comments">
        <CommentList comments={props.comments || []} overflow="auto"/>
      </Box>
    </div>
  )
}

export default Surface