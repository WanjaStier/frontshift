import React, { Component } from 'react';
import { connect } from 'react-redux';
import AssetGrid from '../../components/asset-grid/AssetGrid';
import ProjectInfo from '../../components/project-info/ProjectInfo';
import { makeGetCurrentProjectSelector } from './work-details-selector';


class WorkDetailsContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return  (
      <div>
        <ProjectInfo project={this.props.currentProject} />
        <AssetGrid project={this.props.currentProject} />
      </div>
    )
  }
}

function makeMapStateToProps() {
  const getCurrentProject = makeGetCurrentProjectSelector();
  return (state, props) => {
    return {
      currentProject: getCurrentProject(state.app.work.projects, props)
    }
  }
}


export default  connect(makeMapStateToProps)(WorkDetailsContainer);
