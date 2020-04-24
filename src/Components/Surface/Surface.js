import React from 'react';
import './Surface.css';
import CommentList from '../CommentList/CommentList';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';


const Surface = (props) => {


  return (
    <div className="Surface">
        <h1>{props.title}</h1>
        <Box className="Body">
          {props.body}
          
        </Box>
        <div className="Divider">
        <Divider/>
        </div>
        
      <Box className="Comments">
        <CommentList comments={props.comments || []}/>
      </Box>
    </div>
  )
}

export default Surface