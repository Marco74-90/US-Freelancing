import React, {Component} from 'react'

export default class Job extends Component {


    render() {

        const {name, dateRequest, job, description} = this.props.job


        return(
            <tr>
              <td>{dateRequest}</td>
              <td>{name}</td>
              <td>{job}</td>
              <td>{description}</td>
            </tr>

        )
    }
}