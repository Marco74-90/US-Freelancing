import React, {Component} from 'react'
import Freelancer from '../components/Freelancer'
import Details from '../components/Details'

export default class FreelancerBoard extends Component {

    render() {
        return(
            <div>
                <div>
                    <Freelancer/>
                </div>
                <div>
                    <Details/>
                    <p>Hello world</p>
                </div>
            </div>
        )
    }
}