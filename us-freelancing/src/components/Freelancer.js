import React, {Component} from "react"

export default class Freelancer extends Component {

    
    render() {
        const {name,image} = this.props.freelancer

        return (
            <div>
                <img src={image}/>
                <h2>{name}</h2>
            </div>
        )
    }
}