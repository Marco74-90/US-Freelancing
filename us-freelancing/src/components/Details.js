import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Details extends Component {


    render() {
        const {id, name, image, bio, skills,status, rate} = this.props.details

        return (
            <div>
                <div className="card mb-3">
                    <h3 className="card-header">Details</h3>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                    </div>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none" width="100%" height="200" 
                        aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" 
                        styles="font-size:1.125rem;text-anchor:middle">
                        <rect width="100%" height="100%" fill="#868e96"></rect>
                        <text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text>
                        
                        
                    </svg> */}
                    <div >
                        <img src={image} style={{height: 350, width: 350}}/>
                    </div>
                    
                    <div className="card-body">
                        <p className="card-text">{bio}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> {skills}</li>
                        <li className="list-group-item">{status}</li>
                        <li className="list-group-item">{rate}</li>
                    </ul>
                    <div className="card-body" >
                        {/* <Link to="/PostJob" ><button onClick={console.log(id)}>Hire Me!</button></Link> */}
                        
                        {/* <Link to={{pathname:"/PostJob", objectId:{id: id }}}><button >Hire Me!</button></Link> */}
                        <a href={`/PostJob/${id}`}><button >Hire Me!</button></a>
                        {/* <Link to={`/PostJob/${id}`}><button >Hire Me!</button></Link> */}
                    </div>
                </div>
            </div>
        )
    }


}