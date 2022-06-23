import React, { Component } from "react"
import { connect } from "react-redux";
import Rss from "../feedComponent/rss";
import { fetchReddit } from "../../actions/reddit";
import { fetchHN } from "../../actions/hackerNews";

class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchReddit();
    this.props.fetchHN()
  }

  render() {
    //  this.props.reddit =  { reddit: [], loading: true }
    const handleLoading = () => {

      if (this.props.reddit.loading) {
        return(
        <div className="container-fluid">
        <div className="spinner-grow text-primary" role="status">
  <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
                </div>
          </div>)

      } else {
        // console.log(this.props.reddit_objs)
        return this.props.reddit_objs.map(obj => (
          <Rss key={obj.data.id} title={obj.data.title} url={obj.data.url} />
        ))

        // here I need to return a component with a list of reddit titles by passing in
        // reddit_objs to it and return a <ul><li><li><li>with all the titles.

        //this.props.reddit // this is an Array
      }

    }

    return (
      <div className="container">
    <ul>
    {handleLoading()}
        </ul>
        </div>
  )
}

}

const mapStateToProps = (state) => {
  return {
    reddit_objs: state.reddit,
    reddit: state,
  }
}


export default connect(mapStateToProps,{fetchReddit, fetchHN})(Dashboard)