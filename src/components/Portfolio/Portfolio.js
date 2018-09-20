
import React, { Component } from 'react';
import { store } from '../../stores/index'; 
import projectList from '../../portfolioList';
import './Portfolio.css';

export default class Portfolio extends Component {
  constructor(props){
    super(props);

    this.state = {
      projectsList: projectList
    }
  }

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

