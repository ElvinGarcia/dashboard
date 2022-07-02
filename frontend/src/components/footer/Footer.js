import React, { Component } from "react"
import FooterMenu  from "./FooterMenu";


class Footer extends Component{
  render() {
    const ListItems = [
      {
        name: "About",
        url:'About'
      },
      {
        name:"Socials",
        url:['https://twitter.com','https://linkedin.com']
      },
    ]
    const menu = ListItems.map((item,id) => (<FooterMenu key={id} name={item.name} url={item.url} obj2={item}/>))
    return (
      <ul className="navbar navbar-expand-lg bg-light">
        {menu}
      </ul>
    );
  };
}

export default Footer