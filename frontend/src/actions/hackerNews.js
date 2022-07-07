
const API = 'hacker-news.firebaseio.com/v0/topstories.json'
// const API = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
//  returns the top stories id

// https://hacker-news.firebaseio.com/v0/item/{STORY_ID}.json?print=pretty
// return the stories


// const topstoriesEndPoint = '/topstories.json' // returns a list of ID
// const postEndPoint = 'https://hacker-news.firebaseio.com/v0/item/story_id.json?print=pretty' // returns a json of posts


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
       .then(data => data.slice(0, 10))
       .then(ids => getStories(ids, dispatch));
 };
}

async function getStories(ids, dispatch) {
  const stories = await Promise.all(ids.map(async (id) => await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then(resp => resp.json())));

  dispatch({
    type: 'ADD_HN',
    loading: false,
    arrayOfObjects: stories
  })

};

