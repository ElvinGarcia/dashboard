import React, {Component} from "react";
import FeedMenu from '../menu/feedMenu'
import {login, register,comments } from '../../actions/apiCalls'


class Rss extends Component{
  login = ({ email, password }) => {
   login({ email, password })
  };

  submission = ({ comment, url, id }) => {
    //{ comment: "test", url: "example.com", id: "32363854" }
    comments({ comment, url, id })
  };

  registration = ({ name, email, username, password }) => {
    register({ name, email, username, password })
  };

  render() {
    if(Array.isArray(this.props.feeds)){
      return (
        <ul className="col-md-5 list-group">{this.props.feeds.map(obj =>
          <li
            className="list-group-item"
            key={obj.id}>
            {< FeedMenu
              handleLogin={this.login}
              handleRegistration={this.registration}
              handleSubmission={this.submission}
              url={obj.url}
              id={obj.id}
            />}
          <a href={obj.url} target="_blank" rel="noreferrer" >
            {obj.title}
          </a>
          </li>
      )
       }
      </ul>)
    } else {
      return <li
        className="list-group-item"
        key={this.props.id}>
        {< FeedMenu handleLogin={this.login} />}
        <a href={this.props.url}
          target="_blank"
          rel="noreferrer" >
          {this.props.title}
        </a>
      </li>
      }
  };
}

export default Rss;


