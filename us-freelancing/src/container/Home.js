import React, {Component} from 'react'
import Login from '../components/Login'
import Navbar from '../components/Navbar'

export default class Home extends Component {

    render() {

        return(
            <div>
              <Navbar />
              <Login />
            </div>
        )
    }
}