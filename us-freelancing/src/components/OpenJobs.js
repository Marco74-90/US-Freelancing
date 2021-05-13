import React, {Component} from 'react'
import Job from './Job'
const Url = "http://localhost:3000/openJobs/";

export default class OpenJobs extends Component {
    
    state = {
        openJobs: []
    }

    componentDidMount() {
        fetch(Url)
        .then(res => res.json())
        .then(jobs => this.setState({openJobs: jobs}))
    }
    render() {

        return(
        <table id="openJobs" className="table table-hover">
            <tbody>
                <tr>
                    <th>
                        <h3>Date requested</h3>
                    </th>
                    <th>
                        <h3>Name</h3>
                    </th>
                    <th>
                        <h3>Job</h3>
                    </th>
                    <th>
                        <h3>Description</h3>
                    </th>
                </tr>
                    {this.state.openJobs.map((job, index) => <Job key={index} job={job}/>)}
            </tbody>
        </table>
        )
    }
}