import  React,{ Component } from "react";
import { NavLink } from "react-router-dom";


class NavMenu extends Component{

  render() {


    return (
      <li className="nav-item">
        <NavLink
          to={this.props.url}
          className="nav-link"
        >
          {this.props.name}
        </NavLink>
      </li>
    )
  }
}


export default NavMenu

