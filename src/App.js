import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from './redux/reducers/user'
import { getCart, getProducts } from './redux/reducers/cart'
import {Route, Switch} from 'react-router-dom'

import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import ProductList from './components/ProductList'

class App extends Component {
  componentDidMount() {
    this.props.getUser()
    this.props.getProducts()
    this.props.getCart()
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/cart' component={Cart} />
          <Route path='/product' component={ProductList}/>
        </Switch>
        </ div>
        



    );
  }
}

export default withRouter(connect(null, { getUser, getCart, getProducts })(App));
