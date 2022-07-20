import React, { Component } from "react"


class FeedMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: {
        username: "",
        password: '',
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
    if (event.target.name === 'login') {
      // {username:'fuzz', password:'buzz' }
      return this.state.login.username && this.state.login.password ? this.props.handleLogin(this.state.login) : console.log("a username and password combination are required!!");
    } else if(event.target.name === 'reg') {
      return this.state.reg.username && this.state.reg.name && this.state.reg.email && this.state.reg.password ? this.props.register(this.state.reg) : console.log("All Fields are required!!");
    }else{
      // {comment:"fizz", url:'buzz', urlid:'' }
      return this.state.comments.comment && this.state.comments.url ? this.props.handleSubmission(this.state.comments) : console.log("a comment and url combination are required!!");
    }

  }

  handleFormChange = (event) => {
    this.setState({ login: { ...this.state.login, [event.target.name]: event.target.value } })
  }

  handleRegistration = event => {
    this.setState({ reg: { ...this.state.reg, [event.target.name]: event.target.value } })
  }

  render() {
    return (
      <>
      <span className="dropdown">
        <button
          className="btn btn-light dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
          aria-expanded="false"
        >
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

          {/* FORM STARTS HERE */}
          <form className="px-4 py-3" name="login" onSubmit={this.onSubmit} >
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email"
                className="form-control"
                id="exampleDropdownFormEmail1 Username"
                name="username"
                placeholder="email@example.com"
                value={this.state.login.username}
                onChange={this.handleFormChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password"
                className="form-control"
                id="exampleDropdownFormPassword1 password"
                name="password"
                placeholder="Password"
                value={this.state.login.password}
                onChange={this.handleFormChange}
              />
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input type="checkbox"
                  className="form-check-input"
                  id="dropdownCheck"
                  onChange={this.handleFormChange}
                />
                <label className="form-check-label" htmlFor="dropdownCheck">
                  Remember me
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
          </form>{/* END OF FORM */}
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#null">Forgot password?</a>
          <a href="##"
            className="dropdown-toggle"
            id="dropdownMenuClickableOutside"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false">
            New around here? Sign up
        </a>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">

{/* new reg. start here*/}
        {/*reg: {name: "",email: "",username:"",password:""}*/}
          <form className="px-4 py-3" name="reg" onSubmit={this.onSubmit} >
        {/* name */}
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="username"
                className="form-control"
                id="uname"
                name="name"
                placeholder="Name"
                value={this.state.reg.name}
                onChange={this.handleRegistration}
              />
            </div>

            {/* username */}
             <div className="mb-3">
              <label className="form-label">Username</label>
              <input type="username"
                className="form-control"
                id="username"
                name="username"
                placeholder="username"
                value={this.state.reg.username}
                onChange={this.handleRegistration}
              />
            </div>

            {/* email  */}
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="email@example.com"
                value={this.state.reg.email}
                onChange={this.handleRegistration}
              />
            </div>

              {/* Password */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                value={this.state.reg.password}
                onChange={this.handleRegistration}
              />
            </div>
            <button type="submit" className="btn btn-primary">Create Account</button>
          </form>{/* END OF FORM */}
         </ul>
  {/* new reg. end here*/}
          </ul>
        </span>
        <span>
          <ul>


{/* comments form starts here Only when already logged in */}
          <form className="px-4 py-3" style={{ display: 'none' }} onSubmit={this.onSubmit}>
            <div className="mb-3" >
              <label htmlFor="comments" className="form-label">Comments</label>
              <input type="text"
                className="form-control"
                id="comments"
                placeholder="your comments"
                onChange={this.handleFormChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">submit</button>
          </form>

          </ul>
      </span>
  </>
    )
  }
}


export default FeedMenu;