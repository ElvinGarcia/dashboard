import  React,{ Component } from "react";
import { NavLink } from "react-router-dom";


class NavMenu extends Component{

  render() {
    let activeStyle = {
      textDecoration: "underline",
    };

    return (
      <li>
        <NavLink
          to={this.props.url}
          style={({ isActive }) => isActive ? activeStyle : undefined}
          end
        >

          {this.props.name}
        </NavLink>
      </li>
    )
  }
}


export default NavMenu

