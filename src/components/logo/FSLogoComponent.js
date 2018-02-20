import React, { Component } from 'react';
import logo from '../../images/fs-logo.svg';
import './fs-logo.css';
export default class FSLogoComponent extends Component {
  render() {
    return (
      <div className='fs-logo'>
        <img src={logo} alt="frontshift" />
      </div>
    );
  }
}

