import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectTileComponent from '../../components/project-tile/ProjectTileComponent';
import { workOverviewSelector } from './work-overview-selector';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class WorkOverviewContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  getProjectLink(project) {
    return `${this.props.match.path}/${project.clientId}/${project.id}`
  }


  render() {
    return (
      <section className="fs-work-overview grid">
        {
          this.props.projects.map(project => {
            return <NavLink
              key={project.id}
              to={this.getProjectLink(project)}
              className="col-xs-12 col-sm-6 col-grid">
              <ProjectTileComponent
                id={project.id}
                imageUrl={project.previewImageUrl}
                title={project.title}
                subTitle={project.client}
                classNames={''} />
            </NavLink>
          })
        }
      </section>
    )
  }
}

export default  connect(workOverviewSelector, {
  action: () => {}
})(WorkOverviewContainer);



WorkOverviewContainer.propTypes = {
  projects: PropTypes.array.isRequired
};
