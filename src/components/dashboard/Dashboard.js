import React, { Component } from "react"
import { connect } from "react-redux";
import {fetchReddit} from "../../actions/reddit"

class Dashboard extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchReddit()
  }

  render() {
    //  this.props.reddit =  { reddit: [], loading: true }
    const handleLoading = ()=> {
      if (this.props.reddit.loading) {
          return <span>'🐢 🐢 🐢 🐢 🐢 🐢 🐢 🐢 🐢 🐢 🐢 🐢 🐢'</span>
      } else {
        // here I need to return a component with a list of reddit titles by passing in
        // reddit_objs to it and return a <ul><li><li><li>with all the titles.
        return <p> ready to display data</p>
        //this.props.reddit // this is an Array
      }

    }

    return (
    <>
    {handleLoading()}
    </>
  )
}

}

const mapStateToProps = (state) => {
  return {
    reddit_objs: state.reddit,
    reddit: state,
  }
}


export default connect(mapStateToProps,{fetchReddit})(Dashboard)