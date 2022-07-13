import React, { Component } from "react"


class FeedMenu extends Component{
  constructor(props) {
    super(props)
    this.state = {
      login:{
      username: "",
        password: '',
      },
      comments: {
        comment: "",
        url: "",
        urlid:""
      }

    }
  }

  onSubmit = event => {
    console.log("event ")
    event.preventDefault();
    // need refractoring `this.props.handleLogin(this.state)`
    return this.state.login.username && this.state.login.password ? this.props.handleLogin(this.state) : console.log("a username and password combination are required!!")
  }

  handleFormChange = (event) => {
    this.setState({ login: { ...this.state.login, [event.target.name]: [event.target.value] } })
  }

  render() {
    return (
      <span className="dropdown">
      <button
        className="btn btn-light dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

{/* FORM STARTS HERE */}
<form className="px-4 py-3" onSubmit={this.onSubmit} >
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
      <label  className="form-label">Password</label>
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
  <a className="dropdown-item" href="#null">New around here? Sign up</a>
  <a className="dropdown-item" href="#null">Forgot password?</a>

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

   )
 }
}


export default FeedMenu;