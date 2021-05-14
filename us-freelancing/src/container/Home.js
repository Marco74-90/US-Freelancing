import React, {Component} from 'react'
import {Image} from 'react-bootstrap'




export default class Home extends Component {

  render() {

    return (
        <div className="Home">
           <h1>Welcome</h1>
           <Image src="https://previews.123rf.com/images/tynyuk/tynyuk1701/tynyuk170100405/69938800-labor-day-a-group-of-people-of-different-professions-on-a-white-background-vector-illustration-in-a-.jpg"rounded/>
           <h2>We are here to help with any job</h2>  
        </div>
    )
  }
}