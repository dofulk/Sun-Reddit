import React from 'react';
import './App.css';
import Surface from './Components/Surface/Surface';
import Cat from './cutedog.jpg';
import Image from './Components/Image/Image';
import TextBody from './Components/TextBody/TextBody';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'
import Player from './Components/Player/Player'






const App = () => {

  const post = useSelector(state => state.post);



  return (
    <Box className="App">
      <Box className="Main">
        <Surface
          title="Here's something to consider"
          comments={post.comments}
          body={<Image src={Cat}></Image>}
        />
            <Box className="Buttons">
            <Button
            variant="contained"
            color="secondary"


          >UP</Button>
              <Button onClick={() => alert("hi")}
              variant="contained"
              color="secondary" >DOWN</Button>
            </Box>
      </Box>
    </Box>
  )
}


export default App;