
import React, { Component } from 'react';
import { store } from '../../stores'; 
import { server } from '../../config';
import './Form.css';

export default class Footer extends Component {
  componentWillMount(){  
    this.updateLanguage();
  }

  componentDidMount(){
    store.subscribe(() => {
      this.updateLanguage();
    });
  }

  updateLanguage = () => {
    this.setState({
      language: store.getState().language
    })
  }

  sendForm(){
    fetch(server + '/contact', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: 'diegofu04@gmail.com' })
    }).then(res => res.json())
      .then(res => console.log(res));
  }

  render() {
    return (
      <div className="form-wrapper">
        <form action="" className="form-contact">
          <h3 className="contact-title">
            {store.getState().languageData[this.state.language].formTitle}
          </h3>

          <input 
            className="input-form"
            type="text" 
            name="name" 
            id="name" 
            placeholder={store.getState().languageData[this.state.language].formInput[0]} 
          />
          
          <input 
            className="input-form" 
            type="text"
            name="subject" 
            id="subject"
            placeholder={store.getState().languageData[this.state.language].formInput[1]}
          />
          
          <input 
            className="input-form" 
            type="email" 
            name="email" 
            id="email" 
            placeholder={store.getState().languageData[this.state.language].formInput[2]} 
          />
          
          <textarea 
            className="input-form" 
            name="message" 
            id="message" 
            cols="30" 
            rows="5" 
            placeholder={store.getState().languageData[this.state.language].formInput[3]}>
          </textarea>

          <button className="submit-contact complete-form" type="submit">
            {store.getState().languageData[this.state.language].formInput[4]}
          </button>
        </form>
      </div>
    );
  }
}

