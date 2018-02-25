import React from 'react';
import { NavLink } from 'react-router-dom';
import { getProjectLink } from '../../helpers/routing';
import './project-info.css';

export default function ProjectNav({nextProject}) {
  return (
    <div  className="grid fs-project-nav">
      <div className="col-xs-6 col-sm-6 align-start col-grid">
        <NavLink to='/work'
                 className="fs-project-nav__nav-link fs-text-link">
          &lt; Projects
        </NavLink>
      </div>


      { nextProject &&
      <div className="col-xs-6 col-sm-6 align-end col-grid ">
        <NavLink to={getProjectLink(nextProject)}
                 className="fs-project-nav__nav-link fs-project-nav__nav-link--next fs-text-link">
          { nextProject.title } &gt;
        </NavLink>
      </div>
      }
    </div>
  )
}
