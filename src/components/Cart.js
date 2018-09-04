import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateQuantity, removeFromCart, checkout } from '../redux/reducers/cart'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './CSS/Cart.css'


const CURRENCY = 'USD';

const fromUSDToCent = amount => amount * 100

const successPayment = data => {
    alert('Payment Successful')
}

const errorPayment = data => {
    console.log(data)
    alert('Payment Error', data)
}
const onToken = (amount, description, checkout) => token => {
    axios.post(process.env.REACT_APP_PAYMENT_SERVER_URL,
        {
            description,
            source: token.id,
            currency: CURRENCY,
            amount: fromUSDToCent(amount)
        })
        .then(() => {
            successPayment()
            checkout()
        })
        .catch(err => errorPayment(err))
}
const Checkout = ({ name, description, amount, checkout }) =>
    <StripeCheckout
        name={name}
        description={description}
        amount={fromUSDToCent(amount)}
        token={onToken(amount, description, checkout)}
        currency={CURRENCY}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE}
    />

class Cart extends Component {

    round(value, decimals) {
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }

    updateQuantity = (id, update, quantity) => {
        if (update === 'up') {
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
                <div>
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <p>${item.price} each</p>
                        <p>Quantity: {item.quantity}</p>
                        <img src={item.picture} alt="product" />
                        <button onClick={() => this.updateQuantity(item.id, 'up', item.quantity)}>▲ </button>
                        <button onClick={() => this.updateQuantity(item.id, 'down', item.quantity)}>▼</button>
                        <br />
                        <button onClick={() => this.props.removeFromCart(item.id)}>Delete</button>
                    </div>
                </div>
            )
        })
        total = this.round(total, 2)
        return (
            <div >
                <h3>Cart</h3>
                <div className='cart-main'>
                    {cart}
                    <div className='StripeButton'>
                    <p>Total Purchase: ${total}</p>
                    {Checkout({ name: "FANTASTIC FURNITURE", description: "Buy some furniture", amount: total, checkout: this.props.checkout })}
                    <Link to='/'><button>Cancel</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart
    }
}
export default connect(mapStateToProps, { updateQuantity, removeFromCart, checkout })(Cart)