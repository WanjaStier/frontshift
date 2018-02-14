import React from 'react';
import { NavLink } from 'react-router-dom';


function getNavLinks(items) {
  return items.map(item => (
    <NavLink key={item.key} to={`/${item.key}`} activeClassName='active'>{item.label}</NavLink>
  ));
}

export default function Nav(props) {
  return (
    <ul className='nav'>
      <li>
        { getNavLinks(props.items) }
      </li>
    </ul>
  )
}
