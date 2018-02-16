import React from 'react';
import './fs-background.css';
export default class Background extends React.Component {
  render() {
    return (
      <div className='fs-background' style={ {backgroundimage: `${process.env.PUBLIC_URL}/img/photo-1516962080544-eac695c93791.jpg`}}>
      </div>
    )
  }
}
