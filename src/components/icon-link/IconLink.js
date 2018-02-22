import React from 'react';
import './icon-link.css';

export default function IconLink({iconSrc, linkUrl, target = '_blank', className, children}) {
  return (
    <a className={`fs-icon-link ${className}`} href={linkUrl} target={target}>
      <img src={iconSrc} />
      { children }
    </a>
  )
}
