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
          <form className="px-4 py-3">
    <div className="mb-3">
      <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
    </div>
    <div className="mb-3">
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
        <label className="form-check-label" htmlFor="dropdownCheck">
          Remember me
        </label>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Sign in</button>
  </form>
  <div className="dropdown-divider"></div>
  <a className="dropdown-item" href="#null">New around here? Sign up</a>
          <a className="dropdown-item" href="#null">Forgot password?</a>

  {/* comments form starts here Only when already logged in */}
  <form className="px-4 py-3" style={{display: 'none'}}>
    <div className="mb-3" >
      <label htmlFor="comments" className="form-label">Comments</label>
      <input type="text" className="form-control" id="comments" placeholder="your comments"/>
    </div>
    <button type="submit" className="btn btn-primary">submit</button>
  </form>
  </ul>
    </span>

   )
 }
}


export default FeedMenu;