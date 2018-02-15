import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import FSLogo from '../components/logo/FSLogo';
import Nav from '../components/nav/Nav';
import Home from '../components/Home';
import Contact from '../components/Contact';
import { getAppData } from '../actions/app-actions';


class App extends Component {
  componentDidMount() {
    this.props.getAppData();
  }

  render() {
    return this.props.appData.data ? (
      <div className="App">
        <Switch>
        {/*  <Route exact path="/" component={Home}/>
          <Route path="/contact" component={Contact}/>*/}
        </Switch>
        <FSLogo/>
      </div>
    ) : null;
  }
}

export default connect(state => state, {getAppData})(App);
