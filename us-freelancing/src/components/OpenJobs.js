import React, {Component} from 'react'

export default class OpenJobs extends Component {

    render() {

        return(
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
                        <h3>Category</h3>
                    </th>
                    <th>
                        <h3>Description</h3>
                    </th>
                </tr>
        {/* Data goes here */}
            </tbody>
        </table>
        )
    }
}