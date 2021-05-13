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