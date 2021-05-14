import React, {Component} from 'react'

export default class Details extends Component {


    render() {
        const {id, name, image, bio, skills,status, rate} = this.props.details

        return (
            <div className="details">
                <div className="card mb-3">
                    <h3 className="card-header">Details</h3>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                    </div>
                    <div className="card-image">
                        <img src={image} style={{height: 350, width: 350}}/>
                    </div>
                    
                    <div className="card-body">
                        <p className="card-text">{bio}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> {skills}</li>
                        <li className="list-group-item">{status}</li>
                        <li className="list-group-item"> ${rate} Per Hour</li>
                    </ul>
                    <div className="card-body" >
                        <a href={`/PostJob/${id}`}><button>Hire Me!</button></a>
                    </div>
                </div>
            </div>
        )
    }


}