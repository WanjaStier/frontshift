import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import FSLogo from '../components/logo/FSLogo';
import Nav from '../components/nav/Nav';
import Home from '../components/Home';
import Contact from '../components/Contact';
import Background from '../components/background/Background';
import Services from '../components/services/Services';
import Work from '../components/work/Work';
import WorkDetails from '../components/work/WorkDetails';

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
        <FSLogo/>
        <Route render={route => {
          return (
            <Nav {...route} items={this.props.app.data.navItems}/>
          );
        }}/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/services" component={Services}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/work" component={Work}/>
          <Route path="/work/:client/:project" component={WorkDetails}/>
        </Switch>

      </div>
    ) : null;
  }
}

export default connect(state => state, {getAppData})(App);
