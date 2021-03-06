import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import './nav.css';

export default class NavComponent extends Component {
  isActiveLink(path, match, location) {
    return location.pathname.includes(path)
  }


  render() {
    const { items, pathname } = this.props;
    return (
      <ul className='fs-nav fs-nav__list'>
        {
          items.map(item => {
            const path = `${this.props.path || ''}/${item.key}`;
            const canRenderSubNav = item.items && pathname && pathname.includes(path);
            return (
              <li className="fs-nav__list-item" key={item.key}>
                <NavLink exact
                         to={path}
                         className='fs-nav__link'
                         isActive={this.isActiveLink.bind(this, path)}
                         activeClassName='fs-nav__link--active'>
                  {item.title}
                </NavLink>
                { canRenderSubNav && <NavComponent pathname={pathname} path={path} items={item.items}/> }
              </li>
            )
          })
        }
      </ul>
    )
  }
}

NavComponent.propTypes = {
  items: PropTypes.array.isRequired,
  pathname: PropTypes.string,
  path: PropTypes.string
};
