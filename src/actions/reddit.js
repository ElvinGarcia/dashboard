

const API = 'https://www.reddit.com/r/popular.json'


export function fetchReddit (){
  return (dispatch) => {
    dispatch({type:'LOADING_REDDIT',loading:true})// should indicate that the data is loading
    fetch(API).then(resp=> resp.json()).then(data=> dispatch({type:'ADD_REDDIT', data}))
  }
}

