
import React, { Component } from 'react';
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
  }

  updateLanguage = () => {
    this.setState({
      language: store.getState().language
    })
  }


  render() {
    return (
      <section className="about-me" id="about-me">
        <div className="about-me-wrapper-text">
          <p className="about-me-text">
            {store.getState().languageData[this.state.language].description}
          </p>
        </div>

        <div className="skills">
          <div className="skill-item">
            <img src={require('../../assets/web.svg')} alt="" className="skill-icon" />

            <h3 className="skill-name">
              {store.getState().languageData[this.state.language].services[0].title}
            </h3>

            <p className="skill-desc">
              {store.getState().languageData[this.state.language].services[0].description}
            </p>
          </div>

          <div className="skill-item">
            <img src={require('../../assets/mobile-app.svg')} alt="" className="skill-icon" />

            <h3 className="skill-name">{store.getState().languageData[this.state.language].services[1].title}</h3>

            <p className="skill-desc">
              {store.getState().languageData[this.state.language].services[1].description}
            </p>
          </div>
        </div>
      </section>

    );
  }
}

