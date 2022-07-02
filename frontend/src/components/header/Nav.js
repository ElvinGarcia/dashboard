import React, { Component } from "react";
import NavMenu from './NavMenu';


class Nav extends Component {
  render() {
 const menuItems = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'Dashboard',
      url: 'Dashboard'
    },
    {
      name: 'Orders',
      url: 'Orders'
    },
    {
      name: 'Products',
      url: 'Products'
    },
    {
      name: 'Customers',
      url: 'Customers'
    }
  ]
    const menu = menuItems.map((item, index) => (<NavMenu key={index} name={item.name} url={item.url} />))
    return (
      <ul className="nav nav-tabs navbar-dark bg-dark">
        {menu}
      </ul>
    );
  };
}


export default Nav