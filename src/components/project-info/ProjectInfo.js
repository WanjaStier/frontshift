import React from 'react';
import './project-info.css';

export default function ProjectInfo({project}) {
  return (
    <div className="fs-project-info grid">
      <div className="col-xs-12 col-sm-6 col-grid">
        <h1 className="h1 fs-project-info__title">{project.title}</h1>
        <div className="fs-project-info__metadata">
          <div className="fs-project-info__metadata-item">
            <span className="fs-project-info__meta-key">Client:</span> <span className="fs-project-info__meta-value"> {project.client}</span>
          </div>
          <div className="fs-project-info__metadata-item">
            <span className="fs-project-info__meta-key">Year:</span> <span className="fs-project-info__meta-value"> {project.year}</span>
          </div>
          <div className="fs-project-info__metadata-item">
            <span className="fs-project-info__meta-key">Type:</span> <span className="fs-project-info__meta-value"> {project.type}</span>
          </div>
          <div className="fs-project-info__metadata-item">
            <span className="fs-project-info__meta-key">Executed by:</span> <span className="fs-project-info__meta-value"> {project.company}</span>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-6 col-grid">
        {
          project.description.map((paragraph, index) => {
            return (
              <p className="paragraph" key={index}>{ paragraph }</p>
            )
          })
        }
      </div>
    </div>
  )
}
