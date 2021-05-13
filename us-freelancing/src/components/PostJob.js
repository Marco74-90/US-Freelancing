import React, {Component} from 'react'
import { useState, useEffect } from 'react'


// export const PostJob = (props) => {
//     console.log(props.location.objectId)
//     return (
//             <div>
//                 <form>
//                     <input type="date" name="dateRequested" placeholder="Date Request"/>
//                     <input type="text" name="name" placeholder="Name"/>
//                     <input type="text" name="job" placeholder="Job"/>
//                     <input type="text" name="description" placeholder="Description"/>
//                     <input type="text" name="description" placeholder="Description"/>
//                     <input type="submit"/>
                    
//                 </form>
//             </div>
//     )

// }

export default class PostJob extends Component {

    state = {
        id: "",
        dateRequest: "",
        name: "",
        description: "",
        freelancerId: ""
    }

    submitHandler = (e) => {
        e.preventDefault();
        const tmp = {
            dateRequest: this.state.dateRequest,
            name: this.state.name,
            description: this.state.description,
            freelancerId: this.props.location.objectId.id
            
        }
        const reqObj = {};
        reqObj.headers = {"Content-type": "application/json"};
        reqObj.method = "POST";
        reqObj.body = JSON.stringify({tmp})
        
        fetch("http://localhost:3000/jobs", reqObj)
        .then(r => r.json())
        .then(console.log)
    }

    render() {
        
        
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="date" name="dateRequested" placeholder="Date Request" value= {this.state.dateRequest} onChange={e => this.setState({dateRequest: e.target.value})}/>
                    <input type="text" name="name" placeholder="Name" value= {this.state.name} onChange={e => this.setState({name: e.target.value})}/>
                    <input type="text" name="description" placeholder="Job" value= {this.state.description} onChange={e => this.setState({description: e.target.value})}/>
                    
                    <input type="submit"/>
                    
                </form>
            </div>
        )
    }
}