import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Home from '../components/Home';
import Footer from '../components/footer/Footer';
import Contact from '../components/Contact';
import Services from '../components/services/Services';
import HeaderContainer from '../containers/header/HeaderContainer'
import WorkDetailsContainer from '../containers/work-details/WorkDetailsContainer';
import WorkOverviewContainer from '../containers/work-overview/WorkOverviewContainer';

import { getAppData } from '../actions/app-actions';
import './app.css';

class App extends Component {
  componentDidMount() {
    this.props.getAppData();
  }

  render() {
    return this.props.app.data ? (
      <div className="fs-app">
        <HeaderContainer items={this.props.app.data.navItems}/>
        <div className="fs-app__content fs-app__pages">
          <Route exact path="/" component={Home}/>
          <Route path="/services" component={Services}/>
          <Route path="/contact" component={Contact}/>
          <Route exact path="/work/:client/:project" component={WorkDetailsContainer}/>
          <Route exact path="/work" component={WorkOverviewContainer}/>
          <Footer/>
        </div>

      </div>

    ) : null;
  }
}

function mapStateToProps(state) {
  return state;
}


export default connect(mapStateToProps, {getAppData})(App);
