import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div className="fs-footer">
      <div className="fs-footer__inner grid">
        <hr className="col-xs-12 col-sm-12 col-grid"/>
        <div className="col-xs-12 col-sm-4 col-grid">
          frontshift studios<br />
          web development and consultancy
        </div>
        <div className="col-xs-12 col-sm-4 col-grid">
          <span className="fs-footer__email">
            <a href="mailto:hello@frontshift.com?subject=+++hello frontshift+++" target="_self">hello@frontshift.com</a>
          </span>
        </div>
        <div className="col-xs-12 col-sm-4 col-grid fs-footer__copyright">
          © frontshift Ltd<br/>
          Registered in England & Wales, 8899415
        </div>
      </div>

    </div>
  )
}
