
import React, { Component } from 'react';
import { store } from '../../stores/index'; 
import { server } from '../../config.js';
import './Portfolio.css';

export default class Portfolio extends Component {
  constructor(props){
    super(props);

    this.state = {
      projectsList: []
    }
  }

  componentWillMount() {
    this.updateLanguage();
  }

  componentDidMount() {
    fetch(server + '/projects').then(r => r.json())
      .then(data => this.setState({ projectsList: data.projects }))
      .catch(e => console.error('Something went wrong'));

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

        <ul className="portfolio-list">
          {
            this.state.projectsList.map((project, i) => {
              return (
                <li key={i} className="portfolio-item">
                  <a href={project.url} target="_blank" className="wrapper-project-item">
                    <img className="img-project" src={project.picture} alt="" />
                    <span className="portofolio-name">{project.title}</span>

                    <span className="visit-site">{store.getState().languageData[this.state.language].visitSiteTitle}</span>
                  </a>
                </li>
              )
            })
          }
        </ul> 
      </section>
    );
  }
}

