import axios from 'axios'

let initialState = {
    productsList: [],
    cart: []
}

const FULFILLED = "_FULFILLED"
const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const UPDATE_QUANTITY = 'UPDATE_QUANTITY'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const CHECKOUT = 'CHECKOUT'

export function getProducts() {
    let productsList = axios.get('/api/products').then(results => {
        return results.data
    })
    return {
        type: GET_PRODUCTS,
        payload: productsList
    }
}

export function getCart() {
    let cart = axios.get('/api/cart').then(results => {
        return results.data
    })
    return {
        type: GET_CART,
        payload: cart
    }
}

export function addToCart(id) {
    let cart = axios.post(`/api/cart/${id}`).then(results => {
        return results.data
    })
    return {
        type: ADD_TO_CART,
        payload: cart
    }
}
export function updateQuantity(id, quantity) {
    let cart = axios.put(`/api/cart/${id}?quantity=${quantity}`).then(results => {
        return results.data        
    })
    return {
        type: UPDATE_QUANTITY,
        payload: cart
    }
}

export function removeFromCart(id) {
    let cart = axios.delete(`/api/cart/${id}`).then(results => {
        return results.data
    })
    return {
        type: REMOVE_FROM_CART,
        payload: cart
    }
}

export function checkout() {
    let cart = axios.delete('/api/checkout').then(results => {
        return results.data  
      })
    return {
        type: CHECKOUT,
        payload: cart
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_PRODUCTS + FULFILLED:
            return Object.assign({}, state, {productsList: action.payload})
        case GET_CART + FULFILLED:
            return Object.assign({}, state, {cart: action.payload})
        case ADD_TO_CART + FULFILLED:
            return Object.assign({}, state, {cart: action.payload})
        case UPDATE_QUANTITY + FULFILLED:
            return Object.assign({}, state, {cart: action.payload})
        case REMOVE_FROM_CART + FULFILLED:
            return Object.assign({}, state, {cart: action.payload})
        case CHECKOUT + FULFILLED:
            return Object.assign({}, state, {cart: action.payload})
        default: 
        return state
    }
}