import React, {Component} from 'react';
import ComJob from './ComJob';

export default class CompletedJobs extends Component {

    state = {
        completedJobs: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/completedJobs")
        .then(r => r.json())
        .then(data => {
            this.setState({
                completedJobs: data
            });
        });
    }

    render() {

        return(
            <div className='table'>
                <table className="table table-hover">
                    <tbody>
                        <tr>
                            <th>
                                <h3>Name</h3>
                            </th>
                            <th>
                                <h3>Job</h3>
                            </th>
                            <th>
                                <h3>Rate</h3>
                            </th>
                            <th>
                                <h3>review</h3>
                            </th>
                        </tr>
                        {this.state.completedJobs.map((job) => <ComJob key={job.id} job={job} /> )}
                    </tbody>
                </table>
            </div>

        
        )
    }
}