import React from 'react';
import './asset-grid.css';
import VideoPlayer from '../video-player/VideoPlayer';

function getMarkupForAsset(asset) {
  return asset.type === 'video' ? (
    <VideoPlayer videoUrl={asset.url}/>
  ) : (
    <img src={`${process.env.PUBLIC_URL}${asset.url}`} alt="" />
  )
}

export default function AssetGrid({project}) {

  return (
    <div className="fs-asset-grid grid">
      {
        project.assets.map(asset => {
          return (
            <div className={`${asset.classNames} col-grid fs-asset-grid__item `} key={asset.url}>
              { getMarkupForAsset(asset) }
            </div>
          )
        })
      }
    </div>
  );
}
