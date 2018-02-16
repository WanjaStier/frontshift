import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter  } from 'react-router-dom';
import NavComponent from '../../components/nav/NavComponent';
import { navContainerSelector } from './nav-container-selector';
import './nav-container.css';

class NavContainer extends Component {
  render() {
    console.log(this.props.activeItem)
    return (
      <div className="fs-nav-container">
        <NavComponent
          pathname={this.props.pathname}
          items={this.props.items} />
      </div>
    )
  }
}

export default  connect(navContainerSelector, {
  action: () => { console.log('this is an action')}
})(NavContainer);
