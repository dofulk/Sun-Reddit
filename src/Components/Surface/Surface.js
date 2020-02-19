import React, { useState, useRef, useEffect } from 'react';
import './Surface.css';
import CommentList from '../CommentList/CommentList';
import Input from '../Input/Input';

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
        <CommentList comments={props.comments || []} />
        <Input/>
      </div>
    </div>
  )
}

export default Surface