import React, { Component } from "react";

class CommentMenu extends Component {
  render() {
    return (
      <>
        <span>
          <ul>
         <form className="px-4 py-3" style={{ display: 'none' }} onSubmit={this.props.onSubmit}>
            <li><h6 className="dropdown-header">Comments</h6></li>
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
  };
};

export default CommentMenu