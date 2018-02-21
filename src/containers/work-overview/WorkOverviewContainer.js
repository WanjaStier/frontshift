import React, { Component } from 'react';
import { connect } from 'react-redux';
import LinkTileComponent from '../../components/work/link-tile/LinkTileComponent';
import { workOverviewSelector } from './work-overview-selector';
import NavComponent from '../../components/nav/NavComponent';
import PropTypes from 'prop-types';


class WorkOverviewContainer extends Component {
  render() {
    return (
      <section className="fs-work-overview grid">
        {
          this.props.projects.map(project => {
            return <LinkTileComponent key={project.title} title={project.title} client={project.client} classNames={'col-xs-12 col-sm-6 col-grid'}/>
          })
        }
      </section>
    )

  }
}

export default  connect(workOverviewSelector, {
  action: () => { console.log('this is an action')}
})(WorkOverviewContainer);



WorkOverviewContainer.propTypes = {
  projects: PropTypes.array.isRequired
};
