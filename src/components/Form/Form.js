
import React, { Component } from 'react';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import { store } from '../../stores'; 
import { server } from '../../config';
import './Form.css';

export default class Footer extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      subject: '',
      email: '',
      message: '',
      validate: {
        name: false,
        subject: false,
        email:   false,
      },
      formPristine: true
    }
    
  }

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

  handleName = (e) => {
    this.setState({ name: e.target.value }, () => {
      this.validateName();
    });
  }

  handleSubject = (e) => {
    this.setState({ subject: e.target.value }, () => {
      this.validateSubject();
    });

  }

  handleEmail = (e) => {
    this.setState({ email: e.target.value }, () => {
      this.validateEmail();
    });
  }

  handleMessage = (e) => {
    this.setState({ message: e.target.value });
  }

  validateEmail = () => {
   let EmailValidate = isEmail(this.state.email);

    this.setState(prevState => ({
      validate: {
        ...prevState.validate,
        email: EmailValidate
      }, 
      formPristine: false
    }))
  }

  validateName = () => {
    let NameValidate = this.state.name !== '';


    this.setState(prevState => ({
      validate: {
        ...prevState.validate,
        name: NameValidate
      },
      formPristine: false
    }))

  }

  validateSubject = () => {
    let SubjectValidate = this.state.subject !== '';

    this.setState(prevState => ({
      validate: {
        ...prevState.validate,
        subject: SubjectValidate
      },
      formPristine: false
    }))

  }


  sendForm(event){
    event.preventDefault();

    if (this.state.validate.name === true &&  this.state.validate.subject === true && this.state.validate.email === true){
      console.log(server + '/contact');
      
      axios.post(server + '/contact', {
        name: this.state.name,
        subject: this.state.subject,
        email: this.state.email,
        message: this.state.message
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }else{
      console.log('nope');
    }
  }

  render() {
    return (
      <div className="form-wrapper">
        <form action="" className="form-contact" onSubmit={(event) => {this.sendForm(event)}}>
          <h3 className="contact-title">
            {store.getState().languageData[this.state.language].formTitle}
          </h3>

          <input 
            className={"input-form"} 
            type="text" 
            name="name" 
            id="name" 
            value={this.state.name}
            onChange={this.handleName.bind(this)}
            onBlur={() => { this.validateName()} }
            autoComplete="off"
            placeholder={'*' + store.getState().languageData[this.state.language].formInput[0]} 
          />
          
          <input 
            className={"input-form"} 
            type="text"
            name="subject" 
            id="subject"
            value={this.state.subject}
            onChange={this.handleSubject.bind(this)}
            onBlur={() => { this.validateSubject() }}
            autoComplete="off"
            placeholder={'*' + store.getState().languageData[this.state.language].formInput[1]}
          />
          
          <input 
            className={"input-form"} 
            type="email" 
            name="email" 
            id="email" 
            autoComplete="off"
            value={this.state.email}
            onChange={this.handleEmail.bind(this)}
            onBlur={this.validateEmail}
            placeholder={'*' + store.getState().languageData[this.state.language].formInput[2]} 
          />
          
          <textarea 
            className={"input-form"} 
            name="message" 
            id="message" 
            value={this.state.message}
            onChange={this.handleMessage.bind(this)}
            onBlur={() => { this.setState({ formPristine: false }) }}
            cols="30" 
            rows="5" 
            autoComplete="off"
            placeholder={store.getState().languageData[this.state.language].formInput[3]}>
          </textarea>

          <button 
            className={"submit-contact " + (
              this.state.formPristine === false && 
              this.state.validate.name === true &&
              this.state.validate.subject === true &&
              this.state.validate.email === true ? 'complete-form' : ' '
            )}  
            type="submit">
            {store.getState().languageData[this.state.language].formInput[4]}
          </button>


        </form>
      </div>
    );
  }
}

