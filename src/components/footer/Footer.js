import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div className="fs-footer">
      <div className="fs-footer__inner grid">
        <hr className="col-xs-12 col-sm-12 col-grid fs-ruler"/>
        <div className="col-xs-12 col-sm-4 col-grid">
          <span>
            frontshift.<br />
            consultancy & development
          </span>
        </div>
        <div className="col-xs-12 col-sm-4 col-grid">
          <span className="fs-footer__email">
            <a className="fs-text-link" href="mailto:hello@frontshift.com?subject=+++hello frontshift+++" target="_self">hello@frontshift.com</a>
          </span>
        </div>
        <div className="col-xs-12 col-sm-4 col-grid fs-footer__copyright">
          <span>
            © frontshift ltd<br/>
            registered in england & wales, 09994478
          </span>
        </div>
      </div>

    </div>
  )
}
