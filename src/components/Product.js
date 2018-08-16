import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addToCart, updateQuantity} from '../redux/reducers/cart'

class Product extends Component {

    addProductToCart = (id) => {
        let index = this.props.cart.findIndex(item => item.id === id)
        if( index === -1){
            this.props.addToCart(id)
        } else {
            let quantity = this.props.cart[index].quantity
            quantity++
            this.props.updateQuantity(id, quantity)
        }
      }
    render() {
        let {product} = this.props
        return (
            <div key={product.id}>
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => this.addProductToCart(product.id)}>Add To Cart</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart
    }
}

export default connect(mapStateToProps, {addToCart, updateQuantity})(Product)