import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter  } from 'react-router-dom';
import WorkDetailsComponent from '../../components/work/WorkDetailsComponent';
import { workDetailsSelector } from './work-details-selector';


class WorkDetailsContainer extends Component {
  render() {
    return this.props.project ? (
      <div>
        <WorkDetailsComponent project={this.props.project} />
      </div>
    ) : <h1>select a project</h1>
  }
}

export default  connect(workDetailsSelector, {
  action: () => { console.log('this is an action')}
})(WorkDetailsContainer);
