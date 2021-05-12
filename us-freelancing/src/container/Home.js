import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import FreelancerBoard from './FreelancerBoard'
import JobBoard from './JobBoard'
import PostJob from '../components/PostJob'


export default class Home extends Component { 

  state = {
    jobs:{}
  }

    render() {

        return(
            <div>
              <header>Hello World!</header>
              <Navbar />
              {/* <Login /> */}
              <Switch>

                <Route exact path="/FreelancerBoard"  component={FreelancerBoard} />
                <Route exact path="/JobBoard" component={JobBoard}/>
                <Route exact path="/PostJob" component={PostJob}/>

              </Switch>
            </div>
        )
    }
}