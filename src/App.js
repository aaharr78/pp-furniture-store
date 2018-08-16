import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from './redux/reducers/user'
import { getCart, getProducts} from './redux/reducers/cart'

import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Header from './components/Header'
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
        <Header />
        <LandingPage />
        <Cart />
        <ProductList />
        <div>
          <Route path="/login" component={Login} />
        </div>
      </div>



    );
  }
}

export default withRouter(connect(null, { getUser, getCart, getProducts })(App));
