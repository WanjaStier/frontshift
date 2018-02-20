import React from 'react';
import FSLogoComponent from '../logo/FSLogoComponent'
import './header.css';

export default function HeaderComponent({items}) {
  return (
    <div className="fs-header">
      <div className="fs-header__content fs-app__content">
        <div className="fs-header__content-inner">
          <div className="grid">
            <div className="col-xs-12 col-sm-6 col-grid">
              <FSLogoComponent/>
            </div>
            <div className="col-xs-12 col-sm-6 col-grid">
              <p>TExt</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
