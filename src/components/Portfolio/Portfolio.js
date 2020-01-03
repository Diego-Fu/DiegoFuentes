
import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';
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

    ScrollReveal().reveal('.title-portfolio', { easing: 'ease-in' });
    ScrollReveal().reveal('.portfolio-content-item img', { distance: '150px', origin: 'left', delay: 300 });
    ScrollReveal().reveal('.portofolio-description', { distance: '150px', origin: 'right', delay: 300 });


    ScrollReveal().reveal('.git-link', {
      rotate: {
        x: 20,
        z: 20
      },
      delay: 500
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
                <a href="https://www.hereyouwin.com/home" target="_blank" rel="noopener noreferrer" className="portfolio-title">Here You Win</a>

                <div className="portfolio-content-item">
                  <img src={require('../../assets/hyw.png')} alt="" />

                  <div className="portofolio-description">
                    <div className="tech-wrapper">
                      <span className="tech-bubble">Angular 6</span>
                      <span className="tech-bubble">Sass</span>
                      <span className="tech-bubble">Stripe</span>
                      <span className="tech-bubble">Moment</span>
                    </div>

                    <p className="portfolio-description-text">
                      {store.getState().languageData[this.state.language].portfolioDescriptions[4]}
                    </p>
                  </div>
                </div>
              </li>

            <li>
                <a href="https://www.tudiscovery.com" target="_blank" rel="noopener noreferrer" className="portfolio-title">Discovery Channel Latam/Brasil (2019)</a>

                <div className="portfolio-content-item">
                  <img src={require('../../assets/discovery.png')} alt="" />

                  <div className="portofolio-description">
                    <div className="tech-wrapper">
                      <span className="tech-bubble">Next.js</span>    
                      <span className="tech-bubble">React</span>             
                      <span className="tech-bubble">Sass</span>
                      <span className="tech-bubble">Node/Express.js</span>
                    </div>

                    <p className="portfolio-description-text">
                      {store.getState().languageData[this.state.language].portfolioDescriptions[3]}
                    </p>
                  </div>
                </div>
              </li>

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

