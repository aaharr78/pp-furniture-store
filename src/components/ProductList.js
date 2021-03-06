import React from 'react'
import Product from './Product'
import { connect } from 'react-redux'

import './CSS/Product.css'


function ProductsList(props) {
    let productsList = props.productsList.map(product => {
        return (
            <Product
                product={product}
                key={product.id}
                updateCart={props.updateCart}
            />
        )
    })
    return (
        <div>
            <h3>Products</h3>
            <div className='productlist'>

                {productsList}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        productsList: state.cart.productsList
    }
}

export default connect(mapStateToProps)(ProductsList)