import React, {Component} from 'react'
import Freelancer from '../components/Freelancer'
import Details from '../components/Details'

const Url = 'http://localhost:3000/freelancer'

export default class FreelancerBoard extends Component {

    state = {
        freelancer: []
    
    }
    
    componentDidMount() {
        fetch(Url)
        .then(r => r.json())
        .then(data => this.setState({freelancer: data}))
    }

    render() {
        return(
            <div>
                <div>
                    {this.state.freelancer.map((freelancer) => <Freelancer  key={freelancer.id} freelancer={this.state.freelancer}/>)}
                </div>
                <div>
                    <Details freelancer={this.state.freelancer}/>
                    <p>Hello world</p>
                </div>
            </div>
        )
    }
}