import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter} from 'react-router-dom';
import Home from '../components/home/Home';
import Footer from '../components/footer/Footer';
import Contact from '../components/contact/Contact';
import About from '../components/about/About';
import HeaderContainer from '../containers/header/HeaderContainer'
import WorkDetailsContainer from '../containers/work-details/WorkDetailsContainer';
import WorkOverviewContainer from '../containers/work-overview/WorkOverviewContainer';
import Page from './Page';
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
          <Route exact path="/" component={Page(Home)}/>
          <Route path="/about" component={Page(About)}/>
          <Route path="/contact" component={Page(Contact)}/>
          <Route exact path="/work/:client/:project" component={Page(WorkDetailsContainer)}/>
          <Route exact path="/work" component={Page(WorkOverviewContainer)}/>
          <Footer/>
        </div>
      </div>

    ) : null;
  }
}

function mapStateToProps(state) {
  return state;
}

export default withRouter(connect(mapStateToProps, {getAppData})(App));
