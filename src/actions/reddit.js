
// const API = 'https://www.reddit.com/r/popular.json'
const API = '/popular.json' // <-- must be


export function fetchReddit() {
  const obj = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      }
  }
  return (dispatch) => {
    dispatch({type:'LOADING_REDDIT',loading:true})// should indicate that the data is loading
    fetch(API, obj).then(response => response.json())
      .then(obj => dispatch({ type: 'ADD_REDDIT', loading: false, arrayOfObjects: obj.data.children }))
      .catch(error => console.log("error occured", error));
  }
}

