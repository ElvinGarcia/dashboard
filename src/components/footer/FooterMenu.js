import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class FooterMenu extends Component{
  render() {
    return (
      <li>
      <NavLink
      to={this.props.name}
      >
        {this.props.name}
        </NavLink>
        </li>
    )
  }
}

export default FooterMenu