import React, { PureComponent }from 'react';
import './home.css';

export default class Home extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="fs-home grid">
        <div className="col-xs-12 col-sm-12 col-grid fs-background" />
      </div>
    )
  }
}
