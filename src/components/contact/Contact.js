import React, { PureComponent } from 'react';
import './contact.css';

export default class Contact extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="fs-contact grid">
        <div className="col-xs-12 col-sm-6 col-grid">
          <h1 className="h1">Contact us</h1>
        </div>
        <div className="col-xs-12 col-sm-6 col-grid">
          <p className="paragraph">
            If you have any questions, feedback or if you would like to get in touch to discuss a project, please don't hesitate to send us an email.<br />
          </p>
          <p>You can contact us at <a className="fs-text-link" href="mailto:hello@frontshift.com?subject=+++hello frontshift+++" target="_self">hello@frontshift.com</a></p>
          <p className="paragraph">
            You can also ping us a message on <a className="fs-text-link" href="https://twitter.com/frontshift" rel="noopener noreferrer" target="_blank">Twitter</a> or <a className="fs-text-link" href="https://www.facebook.com/frontshift" target="_blank" rel="noopener noreferrer">Facebook</a>
          </p>
        </div>
        <div className="col-xs-12 col-sm-12 col-grid fs-background" />
      </div>
    );
  }
}
