import React, {Component} from 'react'

const URL = "http://localhost:3000/completedJobs/"
const open = "http://localhost:3000/openJobs/"

export default class Job extends Component {

    completeJob = () => {

        const newObj = {
            dateRequested: this.props.job.dateRequested,
            name: this.props.job.name,
            job: this.props.job.job,
            description: this.props.job.description 
        }

         const reqObj = {}
         reqObj.headers = {"Content-Type": "application/json"}
         reqObj.method = "POST"
         reqObj.body = JSON.stringify(newObj)

         fetch(URL,reqObj)
         .then(res => res.json())


         fetch(open+this.props.job.id, {method: "DELETE"})
    }

    render() {

        const {dateRequested, name, job, description, id} = this.props.job


        return(
            <tr>
              <td>{dateRequested}</td>
              <td>{name}</td>
              <td>{job}   <button onClick={this.completeJob} id={id}>Complete Job</button></td>
              <td>{description}</td>
            </tr>

        )
    }
}