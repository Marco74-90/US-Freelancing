import React, {Component} from  'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    
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