import React, { Component } from "react"
import LoginMenu from "./loginMenu"
import CommentMenu from "./commentMenu"
import {getlocalStorage} from '../../actions/clientStorage'

class FeedMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: {
        email: process.env.REACT_APP_EMAIL,
        password: process.env.REACT_APP_PASSWORD,
      },
      reg: {
        name: "",
        email: "",
        username:"",
        password:""
      },
      comments: {
        comment: "",
        url: "",
        urlid: ""
      }

    }
  }

  onSubmit = event => {

    event.preventDefault();
    if (event.target.attributes.name.value === 'login') {
      // {email:'foo@bar.com', password:'123' }
      return this.state.login.email && this.state.login.password ? this.props.handleLogin(this.state.login) : console.log("a email and password combination are required!!");

    } else if (event.target.attributes.name.value === 'reg') {
      return this.state.reg.username && this.state.reg.name && this.state.reg.email && this.state.reg.password ? this.props.handleRegistration(this.state.reg) : console.log("All Fields are required!!");

    } else {
      // {comment:"fizz", url:'buzz', urlid:'' }
      return this.state.comments.comment && this.state.comments.url ? this.props.handleSubmission(this.state.comments) : console.log("a comment and url combination are required!!");
    }

  }

  handleFormChange = (event) => {
    this.setState({ login: { ...this.state.login, [event.target.email]: event.target.value } })
  }

  handleRegistration = event => {
    this.setState({ reg: { ...this.state.reg, [event.target.name]: event.target.value } })
  }

  render() {
    return (
      <>
      {/* LoginMenu form starts here Only when not already logged in */}
          <LoginMenu
            onSubmit={this.onSubmit}
            loginEmail={this.state.login.email}
            handleFormChange={this.handleFormChange}
            loginPassword={this.state.login.password}
            regName={this.state.reg.name}
            handleRegistration={this.handleRegistration}
            regUsername={this.state.reg.username}
            regEmail={this.state.reg.email}
            regPassword = {this.state.reg.password}
          />
      {/* comments form starts here Only when already logged in */}
       <CommentMenu/>
  </>
    )
  }
}


export default FeedMenu;