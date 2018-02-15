import React from 'react';
import { NavLink } from 'react-router-dom';

function getNavLinks(items) {
  return items.map(item => (
    <NavLink key={item.key}
             to={`/${item.key}`}
             className='fs-nav__list-item'
             activeClassName='active'>
      {item.label}
    </NavLink>
  ));
}

export default function Nav(props) {
  return (
    <div className='fs-nav'>
      <ul className='fs-nav__list'>
        <li>
          { getNavLinks(props.items) }
        </li>
      </ul>
    </div>
  )
}
