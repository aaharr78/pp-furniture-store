import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import{ Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from './redux/reducers/user'
// import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Login from './components/Login'

class App extends Component {
  componentDidMount(){
    this.props.getUser()
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div>
          <Route path="/" component={Login} />
        </div>
      </div>
      
       
      
    );
  }
}

export default connect(null, {getUser})(App);
