import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { store } from '../../stores/index';
import { switchLanguage } from '../../actions/index';
import './Landing.css';

export default class Landing extends Component {
  componentWillMount(){
   store.subscribe(() => {
      this.setState({
        language: store.getState().language
      });
    });

    this.setState({
      language: store.getState().language
    })
  }

  setLanguage = (language) => {
    store.dispatch((switchLanguage(language)));
  }

  render() {   
    return (
      <section className="banner-wrapper" id="banner">
        <div className="lang-selector">
          <Link 
            className={"lang-btn " + (store.getState().language === 'es' ? 'active' : '')}
            onClick={() => { this.setLanguage('es') }} 
            to="/">
              ES
          </Link>
          
          <Link 
            className={"lang-btn " + (store.getState().language === 'en' ? 'active' : '')}
            onClick={() => { this.setLanguage('en') }} 
            to="/en">
              EN
          </Link>
        </div>

        <div className="main-banner-content">
          <div className="banner-title">
           {store.getState().languageData[this.state.language].title} 
          </div>

          <div className="banner-description">
            {store.getState().languageData[this.state.language].role} 
          </div>

          <div className="banner-social-wrapper">
            <div className="banner-social-icons">
              <a href="https://twitter.com/DiegoFu_" target="_blank" rel="noopener noreferrer" className="social-item-landing">
                <img src={require('../../assets/twitter-logo-silhouette.svg')} alt="Twitter Diego Fuentes" />
              </a>
              <a href="https://www.linkedin.com/in/diego-fuentes-bb5a67b2/" target="_blank" rel="noopener noreferrer" className="social-item-landing">
                <img src={require('../../assets/linkedin-logo.svg')} alt="LinkedIn Diego Fuentes" />
              </a>
              <a href="https://github.com/Diego-Fu" target="_blank" rel="noopener noreferrer" className="social-item-landing">
                <img src={require('../../assets/github-logo.svg')} alt="GitHub Diego Fuentes" />
              </a>
              <a href={`mailto:diegofu04@gmail.com`} className="social-item-landing">
                <img src={require('../../assets/envelope.svg')} alt="Mail Diego Fuentes" />
              </a>
            </div>
          </div>
        </div>

        <a href="#about-me" className="scroll-arrow">
          <span className="scroll-text"> 
            {store.getState().languageData[this.state.language].aboutme} 
          </span>

          <img className="arrow-down" src={require('../../assets/down-arrow.svg')} alt="scroll down" />          
        </a>
      </section> 
    );
  }
}

