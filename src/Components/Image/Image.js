import React, { Component } from 'react';
import './Image.css'

class Image extends Component {


  render() {
    const { src } = this.props;
    return (
        <img className="Image" onLoad={this.onImgLoad} src={src} alt="Sorry"/>
    )
  }
}

export default Image