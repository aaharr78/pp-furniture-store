import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart, updateQuantity } from '../redux/reducers/cart'
import './CSS/Product.css'
import { ToastContainer, ToastStore } from 'react-toasts';

class Product extends Component {

    addProductToCart = (id) => {
        let index = this.props.cart.findIndex(item => item.id === id)
        if (index === -1) {
            ToastStore.success('Item added to Cart. Click Cart to checkout')
            this.props.addToCart(id)
        } else {
            let quantity = this.props.cart[index].quantity
            quantity++
            this.props.updateQuantity(id, quantity)
        }
    }
    render() {
        let { product } = this.props
        return (
            <div className='product-main'>
            <ToastContainer store={ToastStore} position={ToastContainer.POSITION.TOP_CENTER} lightBackground/>
                <div className='productContainer' key={product.id}>
                    <h4>{product.name}</h4>
                    <p>${product.price}</p>
                    <p>{product.description}</p>
                    <div className='product-image'>
                        <img src={product.picture} alt="product" />
                        <button className='btn' onClick={() => this.addProductToCart(product.id)}>Add To Cart</button>
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

export default connect(mapStateToProps, { addToCart, updateQuantity })(Product)