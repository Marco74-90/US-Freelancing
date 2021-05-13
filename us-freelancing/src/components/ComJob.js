import React, {Component} from 'react'

export default class ComJob extends Component {


    render() {

        const {name, job, rate, review} = this.props.job


        return(
            <tr>
              <td>{name}</td>
              <td>{job}</td>
              <td>{rate}</td>
              <td>{review}</td>
            </tr>

        )
    }
}