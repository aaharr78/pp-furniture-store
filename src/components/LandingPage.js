import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './CSS/LandingPage.css'

class LandingPage extends Component {
    render(){
        return(
            <div className='ProductContainer'>
            <Link to='/product'>
            <button className='ProductButton'>
           <h1>PRODUCTS</h1>
            </button>
            </Link>
            </div>
        )
    }
}

export default LandingPage