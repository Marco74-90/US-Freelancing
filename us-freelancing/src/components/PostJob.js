import React, {Component} from 'react'
import { useState, useEffect } from 'react'
import {Form,Button} from 'react-bootstrap'

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
            <Form onSubmit={submitHandler} className="form">
                <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" placeholder="Pick a Date" onChange={(e) => setDateRequested(e.target.value)} />
                    <Form.Text className="text-muted">
                    Please select a date
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Job</Form.Label>
                    <Form.Control type="text" placeholder="Job Type" onChange={e => setJob(e.target.value)}  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3}  onChange={e => setDescription(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
                
        </>
            
    )

}








{/* <form  onSubmit={submitHandler}>
<h1>{name}</h1>
<input type="date" name="dateRequested" placeholder="Date Request" value={dateRequested} onChange={(e) => setDateRequested(e.target.value)} />
<input type="text" name="job" placeholder="Job" value={job} onChange={e => setJob(e.target.value)} />
<input type="text" name="description" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
<input type="submit" />      
</form> */}