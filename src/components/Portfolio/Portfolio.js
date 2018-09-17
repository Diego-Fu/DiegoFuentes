
import React, { Component } from 'react';
import './Portfolio.css';

export default class Portfolio extends Component {
  render() {
    return (
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

                    <span className="visit-site">{this.state.langSelected.visitSiteTitle}</span>
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

