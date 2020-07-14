import React from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Surface from './Components/Surface/Surface';
import Cat from './cutedog.jpg';
import Image from './Components/Image/Image';
import TextBody from './Components/TextBody/TextBody';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'
import Player from './Components/Player/Player'




const useStyles = makeStyles(theme => ({

  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#004747'
  },
}));


const App = () => {

  const classes = useStyles();
  const post = useSelector(state => state.post);



  return (
    <div className="App">
      <div className="Main">
        <Surface
          title="Here's something to consider"
          comments={post.comments}
          body={<Image src={Cat}></Image>}
        />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Box className="Buttons">
              <Button label="UP" handleClick={() => alert("hi")} />
              <Button label="DOWN" />
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  )
}


export default App;