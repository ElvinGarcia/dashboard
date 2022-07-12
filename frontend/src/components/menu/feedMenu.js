import React, { Component } from "react"
class FeedMenu extends Component{
  constructor() {
    super()
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

  handleFormSubmit = (event) => {
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
          <form className="px-4 py-3" onSubmit={  this.handleFormSubmit } >
    <div className="mb-3">
      <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>
              <input type="email"
                className="form-control"
                id="exampleDropdownFormEmail1"
                name="username"
                placeholder="email@example.com"
                value={this.state.login.username}
                onChange={(e) => this.handleFormChange(e)}
              />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
              <input type="password"
                className="form-control"
                id="exampleDropdownFormPassword1"
                name="password"
                placeholder="Password"
                value={this.state.login.password}
                onChange={(e)=>this.handleFormChange(e)}
              />
    </div>
    <div className="mb-3">
      <div className="form-check">
                <input type="checkbox"
                  className="form-check-input"
                  id="dropdownCheck"
                  onChange={(e)=> this.handleFormChange(e)}
                />
        <label className="form-check-label" htmlFor="dropdownCheck">
          Remember me
        </label>
      </div>
    </div>
      <button type="submit" className="btn btn-primary">Sign in</button>
{/* END OF FORM */}
  </form>
  <div className="dropdown-divider"></div>
  <a className="dropdown-item" href="#null">New around here? Sign up</a>
          <a className="dropdown-item" href="#null">Forgot password?</a>

  {/* comments form starts here Only when already logged in */}
          <form className="px-4 py-3"
            style={{ display: 'none' }}
            onSubmit={(e)=>this.handleFormSubmit(e) }
          >
    <div className="mb-3" >
      <label htmlFor="comments" className="form-label">Comments</label>
              <input type="text"
                className="form-control"
                id="comments"
                placeholder="your comments"
                onChange={(e)=> this.handleFormSubmite(e)}
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