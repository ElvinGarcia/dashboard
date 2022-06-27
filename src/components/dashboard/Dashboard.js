import React, { Component } from "react"
import { connect } from "react-redux";
import Rss from "../feedComponent/rss";
import {loadingAnimation} from "../body/loading"
import { fetchReddit } from "../../actions/reddit";
import { fetchHackerNews } from "../../actions/hackerNews";

class Dashboard extends Component {

  componentDidMount() {
    // this.props.fetchReddit();
     this.props.fetchHackerNews()
  }

  render() {
    //  this.props.reddit =  { reddit: [], loading: true }
    //  this.props.hackerNews. =  { reddit: [], loading: true }
    const handleLoading = () => {
      if (this.props.hackerNews.loading ) {
        return loadingAnimation();
      } else {
        const data = this.props.hackerNews.data;
        return data.map(obj => <Rss key={obj.id} title={obj.title} url={obj.url}/>
        )
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
    hackerNews: state.hackerNews, //this.state.hackerNews.data
    reddit: state.reddit, //this.state.reddit.data
  }
}


export default connect(mapStateToProps,{fetchReddit, fetchHackerNews})(Dashboard)