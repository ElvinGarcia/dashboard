import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class FooterMenu extends Component{
  render() {
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

export default FooterMenu