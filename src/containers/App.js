import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter  } from 'react-router-dom';
import FSLogoComponent from '../components/logo/FSLogoComponent';
import NavContainer from '../containers/nav/NavContainer';
import Home from '../components/Home';
import Contact from '../components/Contact';
import Background from '../components/background/Background';
import Services from '../components/services/Services';
import Work from '../components/work/Work';
import WorkDetailsContainer from '../containers/work-details/WorkDetailsContainer';

import { getAppData } from '../actions/app-actions';
import './app.css';

class App extends Component {
  componentDidMount() {
    this.props.getAppData();
  }

  render() {
    return this.props.app.data ? (
      <div className="fs-app">
        <Background/>
        <FSLogoComponent />
        <Route render={route => {
          return (
            <NavContainer {...route} {...this.props.router} items={this.props.app.data.navItems}/>
          );
        }}/>
        <Route exact path="/" component={Home}/>
        <Route path="/services" component={Services}/>
        <Route path="/contact" component={Contact}/>

        <Route exact path="/work/:client/:project" component={WorkDetailsContainer}/>
        <Route exact path="/work/:client" component={WorkDetailsContainer}/>
        <Route exact path="/work" component={Work}/>
      </div>
    ) : null;
  }
}

export default connect(state => state, {getAppData})(App);
