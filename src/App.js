import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from './redux/reducers/user'

import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Header from './components/Header'

class App extends Component {
  componentDidMount() {
    this.props.getUser()
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <LandingPage />
        <div>
          <Route path="/login" component={Login} />
        </div>
      </div>



    );
  }
}

export default withRouter(connect(null, { getUser })(App));
