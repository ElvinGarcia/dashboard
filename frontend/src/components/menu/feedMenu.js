import React, { Component } from "react"
import LoginMenu from "./loginMenu"
import CommentMenu from "./commentMenu"
import {isLoggedIn} from '../../actions/user'

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
        comment:"",
        url:"",
        id:""
      },

    }
  }

  onSubmit = event => {

    event.preventDefault();
    if (event.target.getAttribute('name') === 'login') {
      // {email:'foo@bar.com', password:'123' }
      return this.state.login.email && this.state.login.password ? this.props.handleLogin(this.state.login) : console.log("a email and password combination are required!!");

    } else if (event.target.getAttribute('name') === 'reg') {
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

  handleComments = event => {
    this.setState({
      comments: {
        ...this.state.comments,
        [event.target.name]: event.target.value,
        id: event.target.id,
        url: event.target.getAttribute('url')
      }
    });
  }

  render() {
    if (isLoggedIn()) {
      return <CommentMenu
        handleFormChange={this.handleComments}
        onSubmit={this.onSubmit}
        comment={this.state.comments.comment}
        url={this.props.url}
        id={this.props.id }
      />
    } else {
     return <LoginMenu
        onSubmit={this.onSubmit}
        loginEmail={this.state.login.email}
        handleFormChange={this.handleFormChange}
        loginPassword={this.state.login.password}
        regName={this.state.reg.name}
        handleRegistration={this.handleRegistration}
        regUsername={this.state.reg.username}
        regEmail={this.state.reg.email}
        regPassword={this.state.reg.password}
      />

    }




  }
}


export default FeedMenu;