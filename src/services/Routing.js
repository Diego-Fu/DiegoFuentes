import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import viewportUnitsBuggyfill from 'viewport-units-buggyfill'
import SmoothScroll from 'smooth-scroll';
import Home from '../components/Home/Home';
import Footer from '../components/Footer/Footer';
import Blog from '../components/Blog/Blog';

export default class Routing extends Component {
  componentDidMount(){
    viewportUnitsBuggyfill.init();
    let scroll = new SmoothScroll('a[href*="#"]');
  }

  render() {
    return (
        <Router>
          <div>
            <div>
              <Route path={process.env.PUBLIC_URL + '/(|en)/'} exact  component={Home} />
              <Route path={'/blog'} exact component={Blog} />
            </div>
            
            <Footer />
          </div>
        </Router>
    );
  }
}