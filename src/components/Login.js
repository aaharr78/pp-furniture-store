import React, { Component } from 'react'

class Login extends Component {
    login = () => {
        let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
        let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
        let scope = encodeURIComponent('openid profile email')
        let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)
    
        let location = `${auth0domain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`
    
        window.location = location
      }
      
    
      

    render(){
        return(
            <div >
            <button onClick={this.login}>Login</button>
            </div>
        )
    }
}

export default Login