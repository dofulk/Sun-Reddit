import React from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Surface from './Components/Surface/Surface';
import Cat from './cutepuppy.jpg'
import Image from './Components/Image/Image'


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      comments: [
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
        }]
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Main">
          <Surface title="Her attack eyes are Really big rn" comments={this.state.comments} body={<Image src={Cat} />} />
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
