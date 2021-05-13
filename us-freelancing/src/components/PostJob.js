import React, {Component} from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


export default function PostJob(props) {
    
    
    const [freelancerId, setFreelancerId] = useState(props.match.params.id);
    const [freelancerObj, setFreelancerObj] = useState({});


        useEffect( () => {
            fetch(`http://localhost:3000/freelancer/${freelancerId}`).then(r => r.json())
            .then(data => {
            setFreelancerObj(data);
            console.log(data)
            
        });
        }, {});
        

    

    
    const [openJobs, setOpenJobs] = useState([]);
    // const [name, setName] = useState("");
    const name = freelancerObj.name;
    const [id, setId] = useState(0);

    const [dateRequested, setDateRequested] = useState("");
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
        increment();
        setOpenJobs([...openJobs, newJob]);

    }


    return (
        
        <>
                <form  onSubmit={submitHandler}>
                    <h1>{name}</h1>
                    <input type="date" name="dateRequested" placeholder="Date Request" value={dateRequested} onChange={(e) => setDateRequested(e.target.value)} />
                    {/* <input type="text" name="name" placeholder="Name" value={name} onChange={e => setName(getNames)} /> */}
                    <input type="text" name="job" placeholder="Job" value={job} onChange={e => setJob(e.target.value)} />
                    <input type="text" name="description" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
                    <input type="submit" />      
                </form>
                
        </>
            
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