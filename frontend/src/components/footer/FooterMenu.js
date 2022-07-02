import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class FooterMenu extends Component{

  render() {

    if (Array.isArray(this.props.url)) {
      return this.props.url.map((url, id) => (
        <li className="nav-item" key={id}>
          <a href={url} target="_blank" rel="noreferrer" className="nav-link">
          {url}
        </a>
          </li>

     ))

    } else {
      return (
        <li className="nav-item">
        <NavLink
            to={this.props.name}
            className="nav-link"
        >
          {this.props.name}
          </NavLink>
          </li>
      )
    }

  }
}

export default FooterMenu