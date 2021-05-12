import React, {Component} from 'react'

export default class PostJob extends Component {

    state = {
        id: "",
        dateRequest: "",
        name: "",
        description: "",
        freelancerId: ""
    }

    render() {
        
        return(
            <div>
                <form>
                    <input type="date" name="dateRequested" placeholder="Date Request"/>
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="text" name="job" placeholder="Job"/>
                    <input type="text" name="description" placeholder="Description"/>
                    <input type="text" name="description" placeholder="Description"/>
                    <input type="submit"/>
                    
                </form>
            </div>
        )
    }
}