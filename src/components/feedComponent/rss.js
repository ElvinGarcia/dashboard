import React, {Component} from "react";


class Rss extends Component{
  render() {
    if(Array.isArray(this.props.feeds)){
      return <ul>{this.props.feeds.map(obj =><li key={obj.id}><a href={obj.url} target="_blank" rel="noreferrer" > {obj.title}</a></li>)}</ul>
    } else {
      return <li key={this.props.id}><a href={this.props.url} target="_blank" rel="noreferrer" > {this.props.title}</a></li>
      }



  };
}

export default Rss;