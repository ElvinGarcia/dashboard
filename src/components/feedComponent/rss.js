import React, {Component} from "react";


class Rss extends Component{
  render() {
    return (
         <li><a href={this.props.url} target="_blank" rel="noreferrer" > {this.props.title}</a></li>
    );
  };
}

export default Rss;