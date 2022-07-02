import React, {Component} from "react";
import FeedMenu from '../menu/feedMenu'

class Rss extends Component{
  render() {
    if(Array.isArray(this.props.feeds)){
      return (
        <ul className="col-sm-4 list-group">{this.props.feeds.map(obj =>
          <li
            className="list-group-item"
            key={obj.id}>
            {< FeedMenu/>}
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
        {< FeedMenu />}
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


