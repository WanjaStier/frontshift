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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget enim eu nisl rhoncus interdum. Etiam vel laoreet sem, ut commodo purus. Nulla facilisi. Mauris id consequat nibh. Phasellus ac justo vehicula, pulvinar sapien in, condimentum dui. Nullam tincidunt metus sollicitudin elit lobortis feugiat. Nam ultricies commodo feugiat. Phasellus laoreet blandit ultrices.

            Vivamus ultrices id nulla suscipit interdum. Aliquam erat volutpat. Sed vestibulum accumsan turpis, consequat ullamcorper enim. Suspendisse et nunc volutpat, commodo nisl sit amet, feugiat ex. Vivamus porttitor velit in magna condimentum, sit amet tincidunt ante aliquam. Praesent ac rutrum nisl. Vestibulum vel mi et lectus tristique elementum. Proin dictum sed magna ultrices imperdiet. Sed accumsan massa sodales dui egestas dictum.


          </p>
        </div>
        <div className="col-xs-12 col-sm-6 col-grid">
          <h1 className="h1">Our services</h1>
        </div>
        <div className="col-xs-12 col-sm-6 col-grid">
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget enim eu nisl rhoncus interdum. Etiam vel laoreet sem, ut commodo purus. Nulla facilisi. Mauris id consequat nibh. Phasellus ac justo vehicula, pulvinar sapien in, condimentum dui. Nullam tincidunt metus sollicitudin elit lobortis feugiat. Nam ultricies commodo feugiat. Phasellus laoreet blandit ultrices.

            Vivamus ultrices id nulla suscipit interdum. Aliquam erat volutpat. Sed vestibulum accumsan turpis, consequat ullamcorper enim. Suspendisse et nunc volutpat, commodo nisl sit amet, feugiat ex. Vivamus porttitor velit in magna condimentum, sit amet tincidunt ante aliquam. Praesent ac rutrum nisl. Vestibulum vel mi et lectus tristique elementum. Proin dictum sed magna ultrices imperdiet. Sed accumsan massa sodales dui egestas dictum.
          </p>
        </div>
        <div className="col-xs-12 col-sm-12 col-grid fs-background" />
      </div>
    );
  }
}
