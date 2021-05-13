import React, {Component} from 'react'

export default class Job extends Component {


    render() {

        const {dateRequested, name, job, description} = this.props.job


        return(
            <tr>
              <td>{dateRequested}</td>
              <td>{name}</td>
              <td>{job}</td>
              <td>{description}</td>
            </tr>

        )
    }
}