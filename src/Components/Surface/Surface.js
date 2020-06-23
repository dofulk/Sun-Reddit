import React, { useEffect } from 'react';
import './Surface.css';
import CommentList from '../CommentList/CommentList';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Button from '../Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { addComment } from '../../redux/actions'

const Surface = (props) => {

  const dispatch = useDispatch();
  

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
      <Button label="hi" className="Buttons" 
      
      handleClick={() => dispatch(addComment({
        key: 2,
        comment: "ooooo"
      }))}
      
      />
    </div>
  )
}

export default Surface