import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import smoothScroll from 'smoothscroll';
import Particles from 'react-particles-js';
import ViewportBuggyfill from 'viewport-units-buggyfill';
import lang from './lang.js';
import portfolioList from './portfolioList.js'
import './App.css';
import './Portfolio.css';
import './Aboutme.css';
import './footer.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      langSelected: lang.es,
      projectsList: portfolioList,
    }
  }

  componentDidMount(){
    ViewportBuggyfill.init();
  }

  switchLanguage(langSelector) {
    if (langSelector === 'es') {
      this.setState({ langSelected: lang.es })
    } else {

      this.setState({ langSelected: lang.en })
    }

  }


  render() {   
    return (
      <div className="content-wrapper">

        <section className="banner-wrapper" id="banner">
          <div className="lang-selector">
            <span className="lang-btn" onClick={() => { this.switchLanguage('es') }}>ES</span>
            <span className="lang-btn" onClick={() => { this.switchLanguage('en') }}>EN</span>
          </div>

          <Typing speed={50} className="main-banner-content">
            <img src={require('./assets/profile.jpg')} alt="Diego Fuentes" />
            <span className="banner-title"> {this.state.langSelected.title} <br /> {this.state.langSelected.role} </span>
          </Typing>

          <a href="#about-me" className="scroll-arrow">
            <span className="scroll-text"> {this.state.langSelected.aboutme} </span>
            <img className="arrow-down" src={require('./assets/down-arrow.svg')} alt="scroll down" />          
          </a>

          <Particles
            className="bg"
            params={{
              "particles": {
                "number": {
                  "value": 200,
                  "density": {
                    "enable": false
                  }
                },
                "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                    "speed": 4,
                    "size_min": 0.3
                  }
                },
                "line_linked": {
                  "enable": false
                },
                "move": {
                  "random": true,
                  "speed": 1,
                  "direction": "top",
                  "out_mode": "out"
                }
              },
              "interactivity": {
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "bubble"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "repulse"
                  }
                },
                "modes": {
                  "bubble": {
                    "distance": 250,
                    "duration": 2,
                    "size": 0,
                    "opacity": 0
                  },
                  "repulse": {
                    "distance": 400,
                    "duration": 4
                  }
                }
              }
            }} />

          
        </section>

        <section className="about-me" id="about-me">
          <div className="about-me-wrapper-text">
            <p className="about-me-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eos eveniet porro non quis consectetur iste quas ducimus explicabo impedit, adipisci quos vero suscipit eius vitae sequi ratione, itaque modi?
            </p>
          </div>

          <div className="skills">
            <div className="skill-item">
              <img src={require('./assets/web.svg')} alt="" className="skill-icon"/>

              <h3 className="skill-name">Web Development</h3>

              <p className="skill-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste doloribus suscipit iure nisi. Ipsum fuga, qui, velit reiciendis ut quis similique ipsam explicabo laborum ea itaque enim quos esse consequatur.
              </p>
            </div>

            <div className="skill-item">
              <img src={require('./assets/mobile-app.svg')} alt="" className="skill-icon" />

              <h3 className="skill-name">App Development</h3>

              <p className="skill-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste doloribus suscipit iure nisi. Ipsum fuga, qui, velit reiciendis ut quis similique ipsam explicabo laborum ea itaque enim quos esse consequatur.
              </p>
            </div>
          </div>

          <div className="skills-list-wrapper">
            <h3 className="skills-title">Skills</h3>
            
            <div className="skill-block-wrapper">
              <h4 className="skill-subtitle">Front-end</h4>

              <ul className="skill-list">
                <li className="skill-item-tool">HTML5</li>
                <li className="skill-item-tool">CSS3</li>
                <li className="skill-item-tool">Javascript (ES6)</li>
                <li className="skill-item-tool">Responsive Design</li>
                <li className="skill-item-tool">Build Tools (Webpack, Gulp)</li>
                <li className="skill-item-tool">React.js</li>
                <li className="skill-item-tool">React Router</li>
                <li className="skill-item-tool">Sass</li>
              </ul>
            </div>

            <div className="skill-block-wrapper">
              <h4 className="skill-subtitle">Backend</h4>

              <ul className="skill-list">
                <li className="skill-item-tool">Node.js</li>
                <li className="skill-item-tool">Express.js</li>
                <li className="skill-item-tool">JWT</li>
                <li className="skill-item-tool">MySQL</li>
                <li className="skill-item-tool">MongoDB</li>
              </ul>
            </div>
            
            <div className="skill-block-wrapper">
              <h4 className="skill-subtitle">Mobile Apps</h4>

              <ul className="skill-list">
                <li className="skill-item-tool">React Native</li>
                <li className="skill-item-tool">React Navigation</li>
                <li className="skill-item-tool">React Native Maps</li>
              </ul>
            </div>
            
            <div className="skill-block-wrapper">
              <h4 className="skill-subtitle">Useful Skills</h4>

              <ul className="skill-list">
                <li className="skill-item-tool">Git</li>
                <li className="skill-item-tool">Bash</li>
                <li className="skill-item-tool">JSON</li>
                <li className="skill-item-tool">NPM</li>
              </ul>
            </div>

          </div>
        </section>

        <section className="portfolio" id="portfolio">
          <h1 className="title-portfolio">{this.state.langSelected.titlePortfolio}</h1>

          <ul className="portfolio-list">
            {
            this.state.projectsList.projects.map((project, i) => {
              return (
                <li 
                  key={i} 
                  className="portfolio-item"
                >
                  <a href={project.url} target="_blank" className="wrapper-project-item">
                    <img className="img-project" src={project.img} alt="" />
                    <span className="portofolio-name">{project.name}</span>

                    <span className="visit-site">VISIT SITE</span>
                  </a>
                </li>
              ) 
             })
            }
          </ul>
        </section>

        <footer>
       
          <form action="" className="form-contact">
            <h3 className="contact-title">Let's Work together!</h3>
         
            <input className="input-form" type="text" name="name" id="name" placeholder="name"/>
            <input className="input-form" type="text" name="subject" id="subject" placeholder="subject" />
            <input className="input-form" type="email" name="email" id="email" placeholder="email"/>
            <textarea className="input-form" name="message" id="message" cols="30" rows="5" placeholder="message"></textarea>
          
            <button className="submit-contact complete-form" type="submit">Submit</button>
          </form>

          <div className="social-networks">
            <a href="https://twitter.com/DiegoFu_" className="social-item">
              <img src={require('./assets/twitter-logo-silhouette.svg')} alt="Twitter Diego Fuentes"/>
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

          <span className="footer-text">Diego Fuentes © {new Date().getFullYear()}</span>
        </footer>
      
        
      </div>
    );
  }
}

