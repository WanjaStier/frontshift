import React from 'react';
import './link-tyle.css';

export default function LinkTileComponent({imageUrl, title, subTitle, classNames}) {
  return (
    <div className={`${classNames} fs-link-tile`}>
      <div>
        <p>{title}</p>
        <img src="http://reflexgrid.com/docs/images/5.jpg"/>
        {/*  <div className="fs-link-tile__inner">

      </div>*/}
      </div>


    </div>
  )
}
