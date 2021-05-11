import React, {Component} from  'react'
import {Link} from 'react-router-dom'
import FreelancerBoard from '../container/FreelancerBoard'
import JobBoard from '../container/JobBoard'
import Home from '../container/Home'


export default class Navbar extends Component {

    goHome = () => {
       return <Home/>
    }

    jobs = () => {
        return <JobBoard/>
    }

    freelancer = () => {
        return <FreelancerBoard/>
    }

    render() {

        return(
            <ul>
                <Link to="/Home"><li><button>Home</button></li></Link>
                <Link to="/JobBoard"><li><button>Job Board</button></li></Link>
                <Link to="/FreelancerBoard"><li><button>Freelancers</button></li></Link>
              
            </ul>
        )
    }
}