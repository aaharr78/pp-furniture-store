import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/reducers/user'

function Header(props) {
    return (
        <div>
                {props.user ? <Link to="/login" onClick={props.logout}>logout</Link> : <Link to='/login'>login</Link>}
        </div>
    )
}
let mapStateToProps = state => {
    console.log(11, state)
    return {
        user: state.data
    }
}

export default connect(mapStateToProps, {logout})(Header)