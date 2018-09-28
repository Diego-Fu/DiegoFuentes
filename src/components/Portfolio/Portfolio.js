
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
                    <span className="tech-bubble">Sass</span>
                    <span className="tech-bubble">HTML</span>
                    <span className="tech-bubble">ES6</span>
                    <span className="tech-bubble">Git</span>
                  </div>

                  <p className="portfolio-description-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eos veritatis asperiores dolor nemo! Temporibus error eligendi beatae recusandae quaerat eaque ab neque vero? Praesentium aliquam at voluptatibus nisi alias?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eos veritatis asperiores dolor nemo! Temporibus error eligendi beatae recusandae quaerat eaque ab neque vero? Praesentium aliquam at voluptatibus nisi alias?
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
                    <span className="tech-bubble">React.js</span>
                    <span className="tech-bubble">Sass</span>
                    <span className="tech-bubble">HTML</span>
                    <span className="tech-bubble">ES6</span>
                    <span className="tech-bubble">Git</span>
                  </div>

                  <p className="portfolio-description-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eos veritatis asperiores dolor nemo! Temporibus error eligendi beatae recusandae quaerat eaque ab neque vero? Praesentium aliquam at voluptatibus nisi alias?
                    <br/><br/>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eos veritatis asperiores dolor nemo! Temporibus error eligendi beatae recusandae quaerat eaque ab neque vero? Praesentium aliquam at voluptatibus nisi alias?
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
                    <span className="tech-bubble">React.js</span>
                    <span className="tech-bubble">Sass</span>
                    <span className="tech-bubble">HTML</span>
                    <span className="tech-bubble">ES6</span>
                    <span className="tech-bubble">Git</span>
                  </div>

                  <p className="portfolio-description-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eos veritatis asperiores dolor nemo! Temporibus error eligendi beatae recusandae quaerat eaque ab neque vero? Praesentium aliquam at voluptatibus nisi alias?
                    <br/><br/>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eos veritatis asperiores dolor nemo! Temporibus error eligendi beatae recusandae quaerat eaque ab neque vero? Praesentium aliquam at voluptatibus nisi alias?
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

