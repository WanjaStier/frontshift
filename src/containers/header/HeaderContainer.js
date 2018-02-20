import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavComponent from '../../components/nav/NavComponent';
import FSLogoComponent from '../../components/logo/FSLogoComponent';
import { headerContainerSelector } from './header-container-selector';
import './header-container.css';

class HeaderContainer extends Component {
  render() {
    console.log(this.props.activeItem)
    return (
      <div className="fs-header">
        <div className="fs-header__content fs-app__content">
          <div className="fs-header__content-inner">
            <div className="grid">
              <div className="col-xs-12 col-sm-6 col-grid">
                <FSLogoComponent/>
              </div>
              <div className="col-xs-12 col-sm-6 col-grid">
                <NavComponent
                  pathname={this.props.pathname}
                  items={this.props.items} />
              </div>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default  connect(headerContainerSelector, {
  action: () => { console.log('this is an action')}
})(HeaderContainer);
