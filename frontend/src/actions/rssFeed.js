
// HN api calls
const hnAPI = 'hacker-news.firebaseio.com/v0/topstories.json'
// const API = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
//  returns the top stories id

// https://hacker-news.firebaseio.com/v0/item/{STORY_ID}.json?print=pretty
// return the stories



export function fetchHackerNews() {
  const obj = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  }

   return  (dispatch) => {
    dispatch({ type: 'LOADING_HN', loading: true });// should indicate that the data is loading

     fetch(hnAPI, obj)
       .then(resp => resp.json())
       .then(stories => {
        dispatch({
          type: 'ADD_HN',
          loading: false,
          arrayOfObjects: stories
        })
       })
 };
}

// Reddit api calls


// const API = 'reddit.com/r/popular.json'
const redditAPI = 'reddit.com/r/popular.json'

export function fetchReddit() {
  const obj = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      }
  }
  return (dispatch) => {
    dispatch({ type: 'LOADING_REDDIT', loading: true })// should indicate that the data is loading
    fetch(redditAPI, obj).then(response => response.json()).then(jsonResp => jsonResp.data.children.splice(0,10))
      .then(obj => dispatch({ type: 'ADD_REDDIT', loading: false, arrayOfObjects: obj }))
      .catch(error => console.log("error occured", error.message));
  }
}

