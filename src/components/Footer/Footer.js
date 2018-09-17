
import React, { Component } from 'react';
import { store } from '../../stores/index'; 
import './Footer.css';

export default class Footer extends Component {
  constructor(props){
    super(props);

    this.state = {
      language: 'es'
    }
  }

  componentWillMount(){  
    this.updateLanguage();
  }

  componentDidMount(){
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
          {/*
              <form action="" className="form-contact">
                <h3 className="contact-title">{this.state.langSelected.formTitle}</h3>

                <input className="input-form" type="text" name="name" id="name" placeholder={this.state.langSelected.formInput[0]} />
                <input className="input-form" type="text" name="subject" id="subject" placeholder={this.state.langSelected.formInput[1]} />
                <input className="input-form" type="email" name="email" id="email" placeholder="email" />
                <textarea className="input-form" name="message" id="message" cols="30" rows="5" placeholder={this.state.langSelected.formInput[3]}></textarea>

                <button className="submit-contact complete-form" type="submit">{this.state.langSelected.formInput[4]}</button>
              </form>

              <div className="social-networks">
                <a href="https://twitter.com/DiegoFu_" className="social-item">
                  <img src={require('./assets/twitter-logo-silhouette.svg')} alt="Twitter Diego Fuentes" />
                </a>
                <a href="" className="social-item">
                  <img src={require('./assets/linkedin-logo.svg')} alt="LinkedIn Diego Fuentes" />
                </a>
                <a href="https://github.com/Diego-Fu" className="social-item">
                  <img src={require('./assets/github-logo.svg')} alt="GitHub Diego Fuentes" />
                </a>
                <a href="https://www.linkedin.com/in/diego-fuentes-bb5a67b2/" className="social-item">
                  <img src={require('./assets/envelope.svg')} alt="Mail Diego Fuentes" />
                </a>
              </div>

          */}

          <span className="footer-text"> {store.getState().languageData[this.state.language].title} Diego Fuentes © {new Date().getFullYear()}</span>
        </footer>
      );
  }
}

