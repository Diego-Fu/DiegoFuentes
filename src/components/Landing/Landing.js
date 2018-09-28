import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { store } from '../../stores/index';
import { switchLanguage } from '../../actions/index';
import './Landing.css';

export default class Landing extends Component {
  componentWillMount(){
   store.subscribe(() => {
      this.setState({
        language: store.getState().language
      });
    });

    this.setState({
      language: store.getState().language
    })
  }

  componentDidMount(){
    this.background();
  }

  setLanguage = (language) => {
    store.dispatch((switchLanguage(language)));
  }

  background(){
    const canvas = document.querySelector( 'canvas' );
    const context = canvas.getContext( '2d' );

    const lines = [];

    const colors = [
      ['#000', '#BC3B25' ]
    ];

    var colorIndex = -1;

    var step = 0,
        width = 0,
        height = 0;

    document.ontouchstart = color;
    document.onmousedown = color;
    window.onresize = setup;

    setup();
    color();
    update();

    function setup() {
      
      width = window.innerWidth;
      height = window.innerHeight;

      lines.length = 0;
      
      let lineCount = height / 26;
      let pointCount = 14;
      let spacingH = width / pointCount;
      let spacingV = height / lineCount;
      
      for( let v = 0; v < lineCount; v++ ) {

        let line = { points: [], ran: 0.2 + Math.random() * 0.7 };

        for( let h = 0; h < pointCount; h++ ) {
          line.points.push( {
            nx: h * spacingH,
            ny: v * spacingV
          } );
        }
        
        line.points.push( {
          nx: width + spacingH,
          ny: v * spacingV
        } );
        
        lines.push( line );
        
      }
      
    }

    function color() {

      colorIndex = ( ++colorIndex ) % colors.length;
      canvas.style.backgroundColor = colors[colorIndex][0];

    }

    function update() {

      step += 0.8;
      
      canvas.width = width;
      canvas.height = height;

      context.clearRect( 0, 0, width, height );
      
      context.lineWidth = 2;
      context.strokeStyle = colors[colorIndex][1];
      context.fillStyle = colors[colorIndex][0];
      
      lines.forEach( ( line, v ) => {
        
        context.beginPath();
        
        line.points.forEach( ( point, h ) => {
          
          point.x = point.nx;
          point.y = point.ny + Math.sin( ( point.x * line.ran + ( step + point.ny ) ) / 40 ) * ( 6 + ( point.ny / height * 34 ) );
          
        } );
        
        line.points.forEach( ( point, h ) => {
          
          let nextPoint = line.points[ h + 1 ];
          
          if( h === 0 ) {
            context.moveTo( point.x, point.y );
          }
          else if( nextPoint ) {
            let cpx = point.x + ( nextPoint.x - point.x ) / 2;
            let cpy = point.y + ( nextPoint.y - point.y ) / 2;
            context.quadraticCurveTo( point.x, point.y, cpx, cpy );
          }
          
        } );
        
        context.stroke();
        
        context.lineTo( width, height );
        context.lineTo( 0, height );
        context.closePath();
        context.fill();
        
      } );

      requestAnimationFrame( update );

    }
  }

  render() {   
    return (
      <section className="banner-wrapper" id="banner">
        <canvas></canvas>

        <div className="lang-selector">
          <Link 
            className="lang-btn" 
            onClick={() => { this.setLanguage('es') }} 
            to="/">
              ES
          </Link>
          
          <Link 
            className="lang-btn" 
            onClick={() => { this.setLanguage('en') }} 
            to="/en">
              EN
          </Link>
        </div>

        <div className="main-banner-content">
          <div className="banner-title">
           {store.getState().languageData[this.state.language].title} 
          </div>

          <div className="banner-description">
            {store.getState().languageData[this.state.language].role} 
          </div>

          <div className="banner-social-wrapper">
            <div className="banner-social-icons">
              <a href="https://twitter.com/DiegoFu_" target="_blank" rel="noopener noreferrer" className="social-item-landing">
                <img src={require('../../assets/twitter-logo-silhouette.svg')} alt="Twitter Diego Fuentes" />
              </a>
              <a href="https://www.linkedin.com/in/diego-fuentes-bb5a67b2/" target="_blank" rel="noopener noreferrer" className="social-item-landing">
                <img src={require('../../assets/linkedin-logo.svg')} alt="LinkedIn Diego Fuentes" />
              </a>
              <a href="https://github.com/Diego-Fu" target="_blank" rel="noopener noreferrer" className="social-item-landing">
                <img src={require('../../assets/github-logo.svg')} alt="GitHub Diego Fuentes" />
              </a>
              <a href={`mailto:diegofu04@gmail.com`} className="social-item-landing">
                <img src={require('../../assets/envelope.svg')} alt="Mail Diego Fuentes" />
              </a>
            </div>
          </div>
        </div>

        <a href="#about-me" className="scroll-arrow">
          <span className="scroll-text"> 
            {store.getState().languageData[this.state.language].aboutme} 
          </span>

          <img className="arrow-down" src={require('../../assets/down-arrow.svg')} alt="scroll down" />          
        </a>
      </section> 
    );
  }
}

