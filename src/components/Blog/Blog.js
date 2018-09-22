
import React, { Component } from 'react';
import { server } from '../../config.js';
import './Blog.css'

export default class Blog extends Component {
  constructor(props){
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    fetch(server + '/posts').then(r => r.json())
      .then(data => this.setState({ posts: data.posts }))
      .catch(e => console.error('Something went wrong'));

  }

  render() {
    return (
      <section className="blog-wrapper" id="blog-wrapper">
        <ul>
          {this.state.posts.map((post, i) => {
              return (
                <li key={i}>
                  <a target="_blank">
                    <img src={post.picture} alt={post.title} />
                    <span>{post.title}</span>
                  </a>
                </li>
              )
            })}
        </ul> 
      </section>

    );
  }
}

