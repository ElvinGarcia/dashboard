import React, { Component } from "react";

class LoginMenu extends Component{
  render() {
    return (
      <>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
        <li><h6 className="dropdown-header">Sign in</h6></li>
          {/* FORM STARTS HERE */}
          <form className="px-4 py-3" name="login" onSubmit={this.props.onSubmit} >
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email"
                className="form-control"
                id="exampleDropdownFormEmail1 Username"
                name="email"
                placeholder="email@example.com"
                value={this.props.loginEmail}
                onChange={this.props.handleFormChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password"
                className="form-control"
                id="exampleDropdownFormPassword1 password"
                name="password"
                placeholder="Password"
                value={this.props.loginPassword}
                onChange={this.props.handleFormChange}
              />
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input type="checkbox"
                  className="form-check-input"
                  id="dropdownCheck"
                  onChange={this.props.handleFormChange}
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
        <li><h6 className="dropdown-header">New Registration</h6></li>
{/* new reg. start here*/}
        {/*reg: {name: "",email: "",username:"",password:""}*/}
          <form className="px-4 py-3" name="reg" onSubmit={this.props.onSubmit} >
        {/* name */}
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="username"
                className="form-control"
                id="uname"
                name="name"
                placeholder="Name"
                value={this.props.regName}
                onChange={this.props.handleRegistration}
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
                value={this.props.regUsername}
                onChange={this.props.handleRegistration}
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
                value={this.props.regEmail}
                onChange={this.props.handleRegistration}
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
                value={this.props.regPassword}
                onChange={this.props.handleRegistration}
              />
            </div>
            <button type="submit" className="btn btn-primary">Create Account</button>
          </form>{/* END OF FORM */}
         </ul>
  {/* new reg. end here*/}
          </ul>

      </>
    );
  };
}


export default LoginMenu;


