import React, {Component} from 'react'

export default class Details extends Component {

    render() {
        // const {name, image, bio, skills,status, rate} = this.props.details

        return (
            <div>
                <div className="card mb-3">
                    <h3 className="card-header">Details</h3>
                    <div className="card-body">
                        <h5 className="card-title">Name</h5>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none" width="100%" height="200" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" styles="font-size:1.125rem;text-anchor:middle">
                        <rect width="100%" height="100%" fill="#868e96"></rect>
                        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
                    </svg>
                    <div className="card-body">
                        <p className="card-text">Bio</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Skills</li>
                        <li className="list-group-item">Status</li>
                        <li className="list-group-item">Rate</li>
                    </ul>
                    <div className="card-body">
                        <button>Hire Me!</button>
                    </div>
                </div>
            </div>
        )
    }


}