import React, { Component } from 'react';
import Landing from '../Landing/Landing'

export default class Home extends Component {

constructor(props){
  super(props);

  this.state = {
    number: 0
  }
}

componentDidMount(){
   this.setState({ number: 9 }) 
}

  render() {
    return (
      <div className="content-wrapper">
        <Landing />
      </div>
    );
  }
}




