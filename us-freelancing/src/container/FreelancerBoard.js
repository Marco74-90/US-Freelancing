import React, {Component} from 'react'
import { Freelancer } from '../components/Freelancer'
import Details from '../components/Details'

const Url = 'http://localhost:3000/freelancer'

export default class FreelancerBoard extends Component {

    state = {
        freelancers: [],
        details: {}
        
    
    }
    
    componentDidMount() {
        fetch(Url)
        .then(r => r.json())
        .then(data => this.setState({freelancers: data}))
    }

    showDetails = (data) => {
        this.setState({details: data})
        
    }

    render() {
        console.log(this.state);
        return(
            <div>
                <div className="freelancerBoard">
                    {this.state.freelancers.map((freelancer) => <Freelancer showDetails={this.showDetails} key={freelancer.id} freelancer={freelancer}/>)}
                </div>
                <div className="Details">
                    <Details details={this.state.details}/>
                </div>
            </div>
        )
    }
}