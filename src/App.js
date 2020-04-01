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


const comments = [
  {
    key: 1,
    comment: 'hi'
  },
  {
    key: 2,
    comment: 'hello',
  },
  {
    key: 3,
    comment: 'how'
  },
  {
    key: 4,
    comment: 'hi HAEKKJFDSLAJDSFKJ asdn,mcxxnvkjds;fa jahds;kj;lkdsajf;jdsa ;fjkdx,m.n'
  },
  {
    key: 5,
    comment: 'hi  this is a story all about how my life got turned right upside down'
  },
  {
    key: 6,
    comment: 'hi'
  },
  {
    key: 7,
    comment: 'hi'
  },
  {
    key: 8,
    comment: 'hi'
  },
  {
    key: 9,
    comment: 'hi'
  },
  {
    key: 10,
    comment: 'hi'
  },
  {
    key: 11,
    comment: 'hi'
  },
  {
    key: 12,
    comment: 'hi'
  },
  {
    key: 13,
    comment: 'hi'
  },
  {
    key: 14,
    comment: 'hi'
  },
  {
    key: 15,
    comment: 'hi  this is a story all about how my life got turned right upside down'
  },
  {
    key: 16,
    comment: 'hi  this is a story all about how my life got turned right upside down'
  },
  {
    key: 17,
    comment: 'hi  this is a story all about how my life got turned right upside down'
  }
]

const useStyles = makeStyles(theme => ({

  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#004747'
  },
}));


const App = () => {

  const classes = useStyles();

  return (
    <div className="App">
      <div className="Main">
        <Surface title="Her attack eyes are Really big rn" comments={comments} body={<TextBody text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>} />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Box className="Buttons">
              <Button label="UP" />
              <Button label="DOWN" />
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  )
}

export default App;