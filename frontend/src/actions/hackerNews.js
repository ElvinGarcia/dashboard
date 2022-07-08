
const API = 'hacker-news.firebaseio.com/v0/topstories.json'
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

     fetch(API, obj)
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

