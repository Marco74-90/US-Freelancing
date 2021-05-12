import React, {Component} from 'react'

export default class Details extends Component {

    render() {
        const {name, rate, skills, status, bio, image} = this.props.details
        return (
            <div>
                <img/>
                <h2>Name</h2>
                <h3>Rate</h3>
                <h3>Skills</h3>
                <h3>Status</h3>
                <p>Bio</p>


            </div>
        )
    }


}