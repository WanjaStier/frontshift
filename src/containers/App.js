import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getAppData } from '../actions/app-actions';
import FSLogo from '../components/fs-logo';

class App extends Component {
  componentDidMount() {
    this.props.getAppData();
  }

  getListItems() {
    if (this.props.appData.data) {
      return this.props.appData.data.clients.map((client, index) => (
        <li key={index}>{ client.name }</li>
      ))
    }
   return '';
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">`Fuck yeah {this.num}`</h1>
        </header>
        <p className="App-intro">
        </p>
        <FSLogo/>
        <ul>
          {this.getListItems()}
        </ul>
      </div>
    );
  }
}

export default connect(state => state, { getAppData })(App);
