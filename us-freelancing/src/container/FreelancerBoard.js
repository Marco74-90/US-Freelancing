import React, {Component} from 'react'
import Freelancer from '../components/Freelancer'
import Details from '../components/Details'

const Url = 'http://localhost:3000/freelancer'

export default class FreelancerBoard extends Component {

    state = {
        freelancers: [],
        details:""
    
    }
    
    componentDidMount() {
        fetch(Url)
        .then(r => r.json())
        .then(data => this.setState({freelancers: data}))
    }

    showDetails =() => {

    }

    render() {
        return(
            <div>
                <div className="left">
                    {this.state.freelancers.map((freelancer) => <Freelancer  key={freelancer.id} freelancer={freelancer}/>)}
                </div>
                <div className="right">
                    <Details details={this.state.freelancers}/>
                    <p>Hello world</p>
                </div>
            </div>
        )
    }
}