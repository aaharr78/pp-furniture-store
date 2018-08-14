import axios from 'axios'

const GET_USER = 'GET_USER'
const GET_USER_FULFULLED = 'GET_USER_FULFILLED'

const LOGOUT_USER = 'LOGOUT_USER'
const LOGOUT_USER_FULFILLED = 'LOGOUT_USER_FULFILLED'

let initialState = {
    data: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_FULFULLED:
            return { ...state, data: action.payload.data }
            case LOGOUT_USER_FULFILLED:
            return { ...state, data: null }
        default:
        return state
    }
}

export function getUser() {
    return {
        type: GET_USER,
        payload: axios.get('/api/currentUser')
    }
}
export function logout(){
    return {
        type: LOGOUT_USER,
        payload: axios.get('/api/logout')
    }
}