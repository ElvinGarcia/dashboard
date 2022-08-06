import React, { Component } from "react";

class CommentMenu extends Component {
  render() {
    return (
      <>
        <div className="dropdown d-block">
          <button
          className="btn btn-light dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
          >
          </button>
          <ul className="dropdown-menu  " aria-labelledby="dropdownMenuButton1">
            <li><label htmlFor="comments" className="form-label">Comments</label>
         <form className="" onSubmit={this.props.onSubmit}>
                  <input
                  type="text"
                  className="form-control mb-2"
                  onChange={this.props.handleFormChange}
                  value={this.props.comment}
                  name="comment"
                  placeholder="leave a comment"
                  url={this.props.url}
                  id={this.props.id}
                  />
              <button type="submit" className="btn btn-primary">submit</button>
              </form>
              </li>
            </ul>
      </div>
      </>
    )
  };
};

export default CommentMenu