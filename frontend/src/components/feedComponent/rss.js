import React, {Component} from "react";
import FeedMenu from '../menu/feedMenu'
import {login, } from '../../actions/apiCalls'
class Rss extends Component{

  login = ({ username, password }) => {
    // return { username, password };
   login({ username, password })
  };

  submission = ({ comment, url, urlid }) => {

  };



  render() {
    if(Array.isArray(this.props.feeds)){
      return (
        <ul className="col-sm-4 list-group">{this.props.feeds.map(obj =>
          <li
            className="list-group-item"
            key={obj.id}>
            {< FeedMenu handleLogin={this.login} handleSubmission={this.submission} />}
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


