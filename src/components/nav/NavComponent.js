import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './nav.css';


export default class NavComponent extends Component {

  canRenderSubNav(item, path) {
    return item.items && this.props.pathname && this.props.pathname.includes(path)
  }
  getNavItems(items) {
    return items.map(item => {
      const path = `${this.props.path || ''}/${item.key}`;
      console.log('path', path)
      console.log('activeKey', this.props.pathname)
      return (
        <li key={item.key}>
          <NavLink exact
                   to={path}
                   className='fs-nav__link'
                   activeClassName='fs-nav__link--active'>
            {item.title}
          </NavLink>
          {
            this.canRenderSubNav(item, path) && <NavComponent pathname={this.props.pathname} path={path} items={item.items} />
          }
        </li>
      )
    });
  }

  render() {
    return (
      <ul className='fs-nav fs-nav__list'>
      { this.getNavItems(this.props.items) }
       </ul>
    )
  }
}

NavComponent.propTypes = {
  items: PropTypes.array.isRequired,
  pathname: PropTypes.string,
  path: PropTypes.string
};
