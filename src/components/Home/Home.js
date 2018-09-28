import React, { Component } from 'react';
import Landing from '../Landing/Landing';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Form from '../Form/Form';

export default class Home extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <Landing />
        <AboutMe/> 
        <Portfolio/>
        <Form/>
      </div>
    );
  }
}




