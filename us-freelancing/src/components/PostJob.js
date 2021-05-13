import React, {Component} from 'react'
import { useState, useEffect } from 'react'


export default function PostJob(props) {
    const [freelancerId, setFreelancerId] = useState(props.match.params.id);
    
    const [openJobs, setOpenJobs] = useState([]);
    const [id, setId] = useState(0);

    const [dateRequested, setDateRequested] = useState("");
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [description, setDescription] = useState("");

    const increment = () => {
        let tmp = id;
        setId(tmp+1);
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        const reqObj = {};
        reqObj.headers = {"Content-type": "application/json"};
        reqObj.method = "POST";
        reqObj.body = JSON.stringify({id,dateRequested, name, job, description, freelancerId})
        
        const res = await fetch("http://localhost:3000/openJobs/", reqObj);
        const newJob = await res.json();
        // console.log(newJob);
        increment();
        setOpenJobs([newJob]);
        
    }




    return (
                <form onSubmit={submitHandler}>
                    <input type="date" name="dateRequested" placeholder="Date Request" value={dateRequested} onChange={(e) => setDateRequested(e.target.value)} />
                    <input type="text" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                    <input type="text" name="job" placeholder="Job" value={job} onChange={e => setJob(e.target.value)} />
                    <input type="text" name="description" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
                    
                    <input type="submit"/>
                    
                </form>
            
    )

}

// export default class PostJob extends Component {

//     state = {
//         id: "",
//         dateRequest: "",
//         name: "",
//         description: "",
//         freelancerId: ""
//     }

//     submitHandler = (e) => {
//         e.preventDefault();
//         const tmp = {
//             dateRequest: this.state.dateRequest,
//             name: this.state.name,
//             description: this.state.description,
//             freelancerId: this.props.location.objectId.id
            
//         }
//         const reqObj = {};
//         reqObj.headers = {"Content-type": "application/json"};
//         reqObj.method = "POST";
//         reqObj.body = JSON.stringify({tmp})
        
//         fetch("http://localhost:3000/jobs", reqObj)
//         .then(r => r.json())
//         .then(console.log)
//     }

//     render() {
        
        
//         return(
//             <div>
//                 <form onSubmit={this.submitHandler}>
//                     <input type="date" name="dateRequested" placeholder="Date Request" value= {this.state.dateRequest} onChange={e => this.setState({dateRequest: e.target.value})}/>
//                     <input type="text" name="name" placeholder="Name" value= {this.state.name} onChange={e => this.setState({name: e.target.value})}/>
//                     <input type="text" name="description" placeholder="Job" value= {this.state.description} onChange={e => this.setState({description: e.target.value})}/>
                    
//                     <input type="submit"/>
                    
//                 </form>
//             </div>
//         )
//     }
// }