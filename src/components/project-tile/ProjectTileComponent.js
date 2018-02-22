import React from 'react';
import './project-tile.css';

export default function ProjectTileComponent({imageUrl, title, subTitle, id, classNames}) {
  return (
    <figure className={`${classNames} fs-project-tile`} >
      <div className="fs-project-tile__inner">
        <img className="fs-project-tile__image" src={`${process.env.PUBLIC_URL}${imageUrl}`}/>
        <div className="fs-project-tile__overlay" />
        <div className="fs-project-tile__copy-container">
          <h1 className="fs-project-tile__title">{title}</h1>
          <h3 className="fs-project-tile__subtitle">{subTitle}</h3>
        </div>
      </div>
    </figure>
  )
}
