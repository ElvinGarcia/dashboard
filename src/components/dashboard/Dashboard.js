import React from "react"
import { connect } from "react-redux";
import {fetchReddit} from "../../actions/reddit"

const Dashboard = () => {
  return (
    <p>Dashboard Goes Here</p>
  );
};

const mapStateToProps = (state)=>{
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps,{fetchReddit})(Dashboard)