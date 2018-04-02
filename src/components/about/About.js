import React, { PureComponent } from 'react';
import './about.css';

export default class About extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="fs-about grid">
        <div className="col-xs-12 col-sm-6 col-grid">
          <h1 className="h1">What we do</h1>
        </div>
        <div className="col-xs-12 col-sm-6 col-grid">
          <p className="paragraph">
            We work in a collaborative partnership with businesses and agencies to create cutting edge applications and websites using the best modern and widely adopted standards of today.
          </p>
          <p className="paragraph">
            We equally focus on delivering pixel perfect and performance optimsed user experiences, as well as scalable, modularised codebases which are easy to maintain and extend, employing the highest standards and coding practices.
          </p>
          <p className="paragraph">
          We have 15+ years of experience in the industry, covering a wide range of internet technologies.
          </p>
        </div>
        <div className="col-xs-12 col-sm-6 col-grid">
          <h1 className="h1">Our services</h1>
        </div>
        <div className="col-xs-12 col-sm-6 col-grid">
          <h2>Programming Languages & Methodologies:</h2>
          <p className="fs-about__service-list">
            ES6 / ES5/ OOCSS / SASS / BEM / HTML / ActionScript /
          </p>
          <h2>Libraries & Frameworks:</h2>
          <p className="fs-about__service-list">
            React / Redux / Reselect / AngularJS / Backbone  / jQuery / PixiJS / CreateJS /
          </p>
          <h2>Testing:</h2>
          <p className="fs-about__service-list">
            Jest / Enzyme / Karma / Mocha / Protractor / Chai / Sinon
          </p>
          <h2>Build & Deployments:</h2>
          <p className="fs-about__service-list">
            Webpack / Gulp / Grunt / Jenkins /
          </p>
          <h2>Other:</h2>
          <p className="fs-about__service-list">
            Audio production / Sound Design & Mastering / Photoshop / Illustrator / Sketch / Figma
          </p>
        </div>
        <div className="col-xs-12 col-sm-12 col-grid fs-background" />
      </div>
    );
  }
}
