import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button/Button'
import Surface from './Components/Surface/Surface'

function App() {
  return (
    <div className="App">
      <div className="Main">
      <Surface title="Under the Blanket" body="he" comments={['Welcome to the best time of your life', 'hello']}></Surface>
      </div>
    </div>
  );
}

export default App;
