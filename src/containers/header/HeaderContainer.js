import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavComponent from '../../components/nav/NavComponent';
import FSLogoComponent from '../../components/logo/FSLogo';
import { headerContainerSelector } from './header-container-selector';
import IconLink from '../../components/icon-link/IconLink'
import './header-container.css';
import emailIcon from '../../images/e-mail-envelope.svg';
import {NavLink} from 'react-router-dom';
class HeaderContainer extends Component {
  render() {
    return (
      <div className="fs-header">
        <div className="fs-header__content fs-app__content">
          <div className="fs-header__content-inner">
            <div className="grid">
              <div className="col-xs-12 col-sm-6 col-grid">
                <NavLink exact
                         to='/'
                         isActive={() => true}>
                  <FSLogoComponent/>
                </NavLink>

              </div>
              <div className="col-xs-12 col-sm-6 col-grid">
                <div>
                  <NavComponent
                    pathname={this.props.pathname}
                    items={this.props.items} />
                  <IconLink className="email-link align-end"
                            linkUrl="mailto:hello@frontshift.com?subject=+++hello frontshift+++"
                            target="_self"
                            iconSrc={emailIcon} />
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default  connect(headerContainerSelector, {
  action: () => {}
})(HeaderContainer);
