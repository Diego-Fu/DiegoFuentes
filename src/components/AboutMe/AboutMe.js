
import React, { Component } from 'react';
import './AboutMe.css';

export default class AboutMe extends Component {
  render() {
    return (
      <section className="about-me" id="about-me">
        <div className="about-me-wrapper-text">
          <p className="about-me-text">
            {this.state.langSelected.description}
          </p>
        </div>

        <div className="skills">
          <div className="skill-item">
            <img src={require('./assets/web.svg')} alt="" className="skill-icon" />

            <h3 className="skill-name">{this.state.langSelected.services[0].title}</h3>

            <p className="skill-desc">
              {this.state.langSelected.services[0].description}
            </p>
          </div>

          <div className="skill-item">
            <img src={require('./assets/mobile-app.svg')} alt="" className="skill-icon" />

            <h3 className="skill-name">{this.state.langSelected.services[1].title}</h3>

            <p className="skill-desc">
              {this.state.langSelected.services[1].description}
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

    );
  }
}

