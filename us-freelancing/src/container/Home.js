import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Navbar from '../components/Navbar'
import FreelancerBoard from './FreelancerBoard'
import JobBoard from './JobBoard'
import PostJob from '../components/PostJob'


export default class Home extends Component { 

  state = {
    jobs:{},
    jobList: []
  }

    render() {
      
        return(
            <div>
              <header></header>
              <Navbar />
              <Switch>

                <Route exact path="/FreelancerBoard"  component={FreelancerBoard} />
                <Route exact path="/JobBoard" component={JobBoard}/>
                <Route exact path="/PostJob/:id" component={PostJob} />
                {/* <Route path="/PostJob/:id" render={()=> <PostJob jobState={this.state} />} /> */}

              </Switch>
            </div>
        )
    }
}