import React, {Component} from 'react'

export default class Login extends Component {

    state = {
        userName: '',
        password: '',
    } 

    postJoB = (e) => {

        e.preventDefault()

        const reqObj = {
            headers: {"Content-Type": "application/json"},
            method:"POST",
            body: JSON.stringify(this.state)
        }

        fetch(Url+ reqObj)
        .then(r => r.json())
        .then(data => console.log(data))
    }
    render() {

        return(

            <div>
                <form onSubmit={this.postJoB}>
                    <input/>
                    <input/>
                    <input/>
                </form>
            </div>
        )
    }
}