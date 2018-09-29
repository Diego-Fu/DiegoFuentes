
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
              <a href="http://instructorestacticos.com" target="_blank" rel="noopener noreferrer" className="portfolio-title">Instructores Tácticos</a>

              <div className="portfolio-content-item">
                <img src={require('../../assets/git.png')} alt="" />

                <div className="portofolio-description">
                  <div className="tech-wrapper">
                    <span className="tech-bubble">React.js</span>
                    <span className="tech-bubble">React-Router</span>
                    <span className="tech-bubble">Sass</span>
                    <span className="tech-bubble">Node/Express.js</span>
                    <span className="tech-bubble">Node Mailer</span>
                    <span className="tech-bubble">Google Maps API</span>
                    <span className="tech-bubble">Google Fonts</span>
                  </div>

                  <p className="portfolio-description-text">
                    {store.getState().languageData[this.state.language].portfolioDescriptions[0]}
                  </p>
                </div>
              </div>
            </li>

            <li>
              <a href="http://nanogasa.com/" target="_blank" rel="noopener noreferrer" className="portfolio-title">Nano Gasa</a>

              <div className="portfolio-content-item">
                <img src={require('../../assets/nano.png')} alt="" />

                <div className="portofolio-description">
                  <div className="tech-wrapper">
                    <span className="tech-bubble">HTML5</span>
                    <span className="tech-bubble">Sass</span>
                    <span className="tech-bubble">Gulp.js</span>
                    <span className="tech-bubble">PHP</span>
                    <span className="tech-bubble">Google Maps API</span>
                    <span className="tech-bubble">Google Fonts</span>
                  </div>

                  <p className="portfolio-description-text">
                    {store.getState().languageData[this.state.language].portfolioDescriptions[1]}
                  </p>
                </div>
              </div>
            </li>

            <li>
              <a href="http://salmaspa.com.mx" target="_blank" rel="noopener noreferrer" className="portfolio-title">Salma Spa</a>

              <div className="portfolio-content-item">
                <img src={require('../../assets/salma.png')} alt="" />

                <div className="portofolio-description">
                  <div className="tech-wrapper">
                    <span className="tech-bubble">HTML5</span>
                    <span className="tech-bubble">Sass</span>
                    <span className="tech-bubble">Gulp.js</span>
                    <span className="tech-bubble">PHP</span>
                    <span className="tech-bubble">Google Maps API</span>
                    <span className="tech-bubble">Google Fonts</span>
                  </div>

                  <p className="portfolio-description-text">
                    {store.getState().languageData[this.state.language].portfolioDescriptions[2]}
                  </p>
                </div>
              </div>
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

