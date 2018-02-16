import React from 'react';
import logo from '../../images/fs-logo.svg';
import './fs-logo.css';
export default class FSLogoComponent extends React.Component {
  render() {
    return (
      <div className='fs-logo'>
        <img src={logo} alt="frontshift" />
      </div>
    );
  }
}

