
import React, { Component } from 'react';
import { store } from '../../stores';
import './Footer.css';

export default class Footer extends Component {
  componentWillMount() {
    this.updateLanguage();
  }

  componentDidMount() {
    store.subscribe(() => {
      this.updateLanguage();
    });
  }

  updateLanguage = () => {
    this.setState({
      language: store.getState().language
    })
  }

  render() {
    return (
      <footer>
        <div className="footer-wrapper">
          <span className="footer-text">
            Diego Fuentes | {new Date().getFullYear()}
          </span>

          <div className="social-networks">
            <a href="https://twitter.com/DiegoFu_" className="social-item">
              <img src={require('../../assets/twitter-logo-silhouette.svg')} alt="Twitter Diego Fuentes" />
            </a>
            <a href="https://www.linkedin.com/in/diego-fuentes-bb5a67b2/" className="social-item">
              <img src={require('../../assets/linkedin-logo.svg')} alt="LinkedIn Diego Fuentes" />
            </a>
            <a href="https://github.com/Diego-Fu" className="social-item">
              <img src={require('../../assets/github-logo.svg')} alt="GitHub Diego Fuentes" />
            </a>
            <a href={`mailto:diegofu04@gmail.com`} className="social-item">
              <img src={require('../../assets/envelope.svg')} alt="Mail Diego Fuentes" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

