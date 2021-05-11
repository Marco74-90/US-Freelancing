import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import FreelancerBoard from './FreelancerBoard'
import JobBoard from './JobBoard'



export default class Home extends Component {

 

    render() {

        return(
            <div>
              <header>Hello World!</header>
              <Navbar />
              {/* <Login /> */}
              <Switch>

                <Route exact path="/FreelancerBoard"  component={FreelancerBoard} />
                <Route exact path="/JobBoard" component={JobBoard}/>

              </Switch>
            </div>
        )
    }
}