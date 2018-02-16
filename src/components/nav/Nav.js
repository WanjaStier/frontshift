import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

function getNavItems(items) {
  return items.map(item => (
    <li key={item.key}>
      <NavLink exact
               to={`/${item.key}`}
               className='fs-nav__link'
               activeClassName='fs-nav__link--active'>
        {item.label}
      </NavLink>
    </li>
  ));
}

export default class Nav extends Component {
  render(data) {
    const { location, match } = this.props;
    console.log(location, match)
    return (
      <div className='fs-nav'>
        <ul className='fs-nav__list'>
          { getNavItems(this.props.items) }
        </ul>
      </div>
    )
  }
}
