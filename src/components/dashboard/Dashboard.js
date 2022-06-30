import React, { Component } from "react"
import { connect } from "react-redux";
import Rss from "../feedComponent/rss";
import {loadingAnimation} from "../body/loading"
import { fetchReddit } from "../../actions/reddit";
import { fetchHackerNews } from "../../actions/hackerNews";

class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchHackerNews();
    this.props.fetchReddit();

  }

  render() {
    const handleLoading = () => {
      return (
        <>
         {loadReddit()}
         {loadHackerNews()}
        </>
      )

    }

    const loadHackerNews =()=>{
      if (this.props.hackerNews.loading) {
        return loadingAnimation();
      } else {
       return <Rss feeds={this.props.hackerNews.data} /> // returns an unorder list
      }
    }

    const loadReddit = () => {
      if (this.props.reddit.loading) {
       return loadingAnimation();
      } else {
        return <ol>{this.props.reddit.data.map(obj => <Rss key={obj.data.id} url={obj.data.url} title={obj.data.title} />)}</ol>
      }
    }

    return (
      <div className="container">
        {handleLoading()}
        </div>
  )
}

}

const mapStateToProps = (state) => {
  return {
    hackerNews: state.hackerNews, //this.state.hackerNews.data
    reddit: state.reddit, //this.state.reddit.data
  }
}


export default connect(mapStateToProps,{fetchReddit, fetchHackerNews})(Dashboard)
