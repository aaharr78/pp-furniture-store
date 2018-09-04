import React, { Component } from 'react'
import { logout } from '../redux/reducers/user'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    login = () => {
        let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
        let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
        let scope = encodeURIComponent('openid profile email')
        let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)

        let location = `${auth0domain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`

        window.location = location
    }

    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="nav-title">
                        Fantastic Furniture
                </div>
                    <div>
                        {this.props.user ? <button className='logout' onClick={this.props.logout}>LOGOUT</button> : <button className='logout' onClick={this.login}>LOGIN</button>}
                    </div>
                    <div className="logout">
                        <Link to='/cart'><button className='logout'>CART</button></Link>
                        <span>ABOUT</span>
                    </div>
                </div>
            </div>
        );
    }
}
let mapStateToProps = state => {
    return {
        user: state.user.data
    }
}

export default connect(mapStateToProps, { logout })(Navbar)
