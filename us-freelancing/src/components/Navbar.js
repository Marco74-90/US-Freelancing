import React, {Component} from  'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    
    render() {

        return(
                <ul className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link to="/Home"><li><button>Home</button></li></Link>
                    <Link to="/AboutUs"><li><button>About us</button></li></Link>
                    <Link to="/FreelancerBoard"><li><button>Freelancers</button></li></Link>
                    <Link to="/OpenJobs"><li><button>Open Jobs</button></li></Link>
                    <Link to="/CompletedJobs"><li><button>Completed Jobs</button></li></Link>
                </ul>
        )
    }
}




