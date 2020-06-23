import React from 'react'
import ReactPlayer from 'react-player'
import './Player.css'

const Player = (props) => {

  return <ReactPlayer className="Player" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />

}

export default Player