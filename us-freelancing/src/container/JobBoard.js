import React, {Component} from 'react'
import OpenJobs from '../components/OpenJobs'
import CompletedJobs from '../components/CompletedJobs'

export default class JobBoard extends Component {

    render() {

        return(
            <div>
               <div>
                   <CompletedJobs/>
               </div>
               <div>
                   <OpenJobs/>
               </div>
            </div>

        )
    }
}