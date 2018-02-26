import React from 'react';
import { NavLink } from 'react-router-dom';
import { getProjectLink } from '../../utils/routing';
import { scrollToTop } from '../../utils/animation';
import './project-info.css';

export default function ProjectNav({nextProject}) {
  return (
    <div  className="grid fs-project-nav">
      <div className="col-xs-6 col-sm-3 align-start col-grid">
        <NavLink to='/work'
                 className="fs-project-nav__nav-link fs-text-link">
          &lt; Projects
        </NavLink>
      </div>
      <div className="col-xs-6 col-sm-3 align-center col-grid">
        <a className="fs-text-link fs-project-nav__nav-link" href="javascript:void(0)" onClick={() => scrollToTop()}>TOP </a>
      </div>

      <div className="col-xs-6 col-sm-3 align-end col-grid ">
        { nextProject &&
          <NavLink to={getProjectLink(nextProject)}
                   className="fs-project-nav__nav-link fs-project-nav__nav-link--next fs-text-link">
            { nextProject.title } &gt;
          </NavLink>
        }
      </div>

    </div>
  )
}
