import React, {Component} from 'react'
import OpenJobs from '../components/OpenJobs'
import CompletedJobs from '../components/CompletedJobs'

const Url = "http://localhost:3000/openJobs/"

export default class JobBoard extends Component {

    state = {
        openJobs: [],
        completedJob:[]
    }

    componentDidMount() {
        fetch(Url)
        .then(res => res.json())
        .then(jobs => this.setState({openJobs: jobs}))
    }

    render() {

        return(
            <div>
               <div>
                   <CompletedJobs/>
               </div>
               <div>
                   <OpenJobs openJobs={this.state.openJobs}/>
               </div>
            </div>

        )
    }
}