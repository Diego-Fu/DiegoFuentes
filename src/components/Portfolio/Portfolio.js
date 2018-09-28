
import React, { Component } from 'react';
import { store } from '../../stores/index'; 
import './Portfolio.css';

export default class Portfolio extends Component {
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
      <section className="portfolio" id="portfolio">
        <h1 className="title-portfolio">{store.getState().languageData[this.state.language].titlePortfolio}</h1>

        <div className="portfolio-wrapper">
          <ul>
            <li>
              <div className="portofolio-description">
                <a href="http://instructorestacticos.com" target="_blank" rel="noopener noreferrer"  className="portfolio-title">Instructores Tácticos</a>
                
                <div className="tech-wrapper">
                  <span className="tech-bubble">React.js</span>
                  <span className="tech-bubble">Sass</span>
                  <span className="tech-bubble">HTML</span>
                  <span className="tech-bubble">ES6</span>
                  <span className="tech-bubble">Git</span>
                </div>
              </div>
              
              <img src={require('../../assets/git_iphone.png')} alt=""/>
            </li>

            <li>
              <div className="portofolio-description">
                <a href="http://nanogasa.com/" target="_blank" rel="noopener noreferrer" className="portfolio-title">Nano Gasa</a>


                <div className="tech-wrapper">
                  <span className="tech-bubble">React.js</span>
                  <span className="tech-bubble">Sass</span>
                  <span className="tech-bubble">HTML</span>
                  <span className="tech-bubble">ES6</span>
                  <span className="tech-bubble">Git</span>
                </div>
              </div>

              <img src={require('../../assets/nano_iphone.png')} alt="" />
            </li>

            <li>
              <div className="portofolio-description">
                <a href="http://salmaspa.com.mx" target="_blank" rel="noopener noreferrer" className="portfolio-title">Salma Spa</a>


                <div className="tech-wrapper">
                  <span className="tech-bubble">React.js</span>
                  <span className="tech-bubble">Sass</span>
                  <span className="tech-bubble">HTML</span>
                  <span className="tech-bubble">ES6</span>
                  <span className="tech-bubble">Git</span>
                </div>
              </div>

              <img src={require('../../assets/salma_iphone.png')} alt="" />
            </li>
          </ul>


          <div className="github-wrapper">
            <a href="https://github.com/Diego-Fu" target="_blank" rel="noopener noreferrer" className="portfolio-title">  {store.getState().languageData[this.state.language].gitTitle}</a>


            <a href="https://github.com/Diego-Fu" target="_blank" rel="noopener noreferrer" className="git-link">
              <img src={require('../../assets/github-logo.svg')} alt="" />
            </a>

          </div>

        </div>
      </section>
    );
  }
}

