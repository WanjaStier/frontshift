import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './video-player.css';

export default class VideoPlayer extends Component {
  render() {
    return (
      <div className="fs-video-player">
        <ReactPlayer url={this.props.videoUrl}
                     width="100%"
                     height="100%" />
      </div>
    )
  }
}
