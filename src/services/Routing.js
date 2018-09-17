import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import viewportUnitsBuggyfill from 'viewport-units-buggyfill'

import Home from '../components/Home/Home';
import Footer from '../components/Footer/Footer';

export default class Routing extends Component {
  componentDidMount(){
    viewportUnitsBuggyfill.init();
  }

  render() {
    return (
        <Router>
          <div>
            <div>
              <Route path={'/' || '/en' || '/es'}  component={Home} />
            </div>
            <Footer />
          </div>
        </Router>
    );
  }
}