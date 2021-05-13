import React, {Component} from 'react'
import Job from './Job'

export default class OpenJobs extends Component {

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
        {this.props.openJobs.map((job) => <Job key={job.id} job={job} />)}
            </tbody>
        </table>
        )
    }
}