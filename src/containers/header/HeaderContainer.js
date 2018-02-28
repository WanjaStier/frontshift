import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavComponent from '../../components/nav/NavComponent';
import FSLogoComponent from '../../components/logo/FSLogo';
import { headerContainerSelector } from './header-container-selector';
import './header-container.css';
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
                         className="fs-header__logo-link"
                         activeClassName="fs-header__logo-link--active">
                  <FSLogoComponent/>
                </NavLink>
              </div>
              <div className="col-xs-12 col-sm-6 col-grid">
                <div>
                  <NavComponent
                    pathname={this.props.pathname}
                    items={this.props.items} />
             {/*     <IconLink className="email-link align-end"
                            linkUrl="mailto:hello@frontshift.com?subject=+++hello frontshift+++"
                            target="_self"
                            iconSrc={emailIcon} />*/}
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default  withRouter(connect(headerContainerSelector, {
  action: () => {}
})(HeaderContainer));
