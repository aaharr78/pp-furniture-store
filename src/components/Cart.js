import React, { Component } from 'react'
import { connect } from 'react-redux'
import {updateQuantity, removeFromCart, checkout} from '../redux/reducers/cart'

class Cart extends Component {
    
    round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
      }

      updateQuantity = (id, update, quantity) => {
        if(update === 'up'){
            quantity++
        } else if (update === 'down') {
            quantity--
        }
        this.props.updateQuantity(id, quantity)
    }

    render() {
        let total = 0
        let cart = this.props.cart.map(item => {
            total += (item.price * item.quantity)
            return (
                <div key={item.id}>
                    <h4>{item.name}</h4>
                    <p>${item.price} each</p>
                    <p>Quantity: {item.quantity}</p>
                    <img src={item.picture} alt="product"/>
                    <button onClick={() => this.updateQuantity(item.id, 'up', item.quantity)}>▲ </button>
                    <button onClick={() => this.updateQuantity(item.id, 'down', item.quantity)}>▼</button>
                    <br/>
                    <button onClick={() => this.props.removeFromCart(item.id)}>Delete</button>
                </div>
            )
        })
        total = this.round(total, 2)
        return(
            <div>
                <h3>Cart</h3>
                {cart}
                <br />
                <p>Total: ${total}</p>
                <button onClick={this.props.checkout}>Checkout</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart
    }
}
export default connect(mapStateToProps, {updateQuantity, removeFromCart, checkout})(Cart)