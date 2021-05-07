
import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';
import { store } from '../../stores/index'; 
import './AboutMe.css';

export default class AboutMe extends Component {
  componentWillMount() {
    this.updateLanguage();
  }

  componentDidMount() {
    store.subscribe(() => {
      this.updateLanguage();
    });


    ScrollReveal().reveal('.skills-title, .skills-content p, .skills-category ul', { easing: 'ease-in'});
  }

  updateLanguage = () => {
    this.setState({
      language: store.getState().language
    })
  }


  render() {
    return (
      <section className="about-me" id="about-me">
        <div className="skills-wrapper">
          <h3 className="skills-title"> {store.getState().languageData[this.state.language].aboutMeTitle} </h3>

          <div className="skills-content">
            <p>
              {store.getState().languageData[this.state.language].description} 
            </p>
          </div>
        </div>

        <div className="skills-wrapper">
          <h3 className="skills-title"> {store.getState().languageData[this.state.language].experienceTitle} </h3>

          <div className="skills-content">
            <div className="skills-category">
              <p>
                {store.getState().languageData[this.state.language].experienceDesc}
              </p>
            </div>
          </div>
        </div>

        <div className="skills-wrapper">
          <h3 className="skills-title"> {store.getState().languageData[this.state.language].skillsTitle} </h3>

          <div className="skills-content">
            <div className="skills-category">
              <span className="skills-category-title">{store.getState().languageData[this.state.language].categoryTitles[0]}</span>

              <ul>
                <li>&#9633; JavaScript (ES6)</li>
                <li>&#9633; HTML</li>
                <li>&#9633; CSS/Sass</li>
                <li>&#9633; SQL</li>
              </ul>
            </div>

            <div className="skills-category">
              <span className="skills-category-title">{store.getState().languageData[this.state.language].categoryTitles[1]}</span>

              <ul>
                <li>&#9633; Node</li>
                <li>&#9633; Express</li>
                <li>&#9633; React</li>
                <li>&#9633; React Native</li>
              </ul>
            </div>

            <div className="skills-category">
              <span className="skills-category-title">{store.getState().languageData[this.state.language].categoryTitles[2]}</span>

              <ul>
                <li>&#9633; Bash</li>
                <li>&#9633; Git</li>
                <li>&#9633; NPM</li>
                <li>&#9633; Gulp</li>
                <li>&#9633; MongoDB</li>
                <li>&#9633; Google Chrome DevTools</li>
                <li>&#9633; Postman</li>
              </ul>
            </div>
          </div>
        </div>

    </section>
    );
  }
}

