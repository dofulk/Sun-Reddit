import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button/Button';
import Surface from './Components/Surface/Surface';
import Cat from './cateyes.jpg'
import Image from './Components/Image/Image'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="Main">
          <Surface title="Her attack eyes are Really big rn" comments={['hi', 'hello', 'how']} body={<Image src={Cat} />} />
          <div className="Buttons">
            <Button label="UP" />
            <Button label="DOWN" />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
