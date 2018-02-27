import React, { Component } from 'react';
import { connect } from 'react-redux';
import AssetGrid from '../../components/asset-grid/AssetGrid';
import ProjectInfo from '../../components/project-info/ProjectInfo';
import ProjectNav from '../../components/project-nav/ProjectNav';
import { makeGetProjectsSelector } from './work-details-selector';

import './work-details.css';
class WorkDetailsContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return  (
      <div>
        <ProjectInfo project={this.props.currentProject} />
        <AssetGrid project={this.props.currentProject} />
        <ProjectNav showBackLink={true} nextProject={this.props.nextProject} />
      </div>
    )
  }
}

function makeMapStateToProps() {
  const getProjects = makeGetProjectsSelector();
  return (state, props) => {
    return getProjects(state.app.work.projects, props);
  }
}


export default  connect(makeMapStateToProps)(WorkDetailsContainer);
