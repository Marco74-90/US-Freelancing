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
        // console.log(this.state.freelancers)
        return(
            <div>
                <div className="left">
                    {this.state.freelancers.map((freelancer) => <Freelancer showDetails={this.showDetails} key={freelancer.id} freelancer={freelancer}/>)}
                </div>
                <div className="left">
                    <Details details={this.state.details}/>
                </div>
            </div>
        )
    }
}