
//'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
//  gets the top stories id

// https://hacker-news.firebaseio.com/v0/item/{STORY_ID}.json?print=pretty
// get

const topstoriesEndPoint = '/topstories.json' // returns a list of ID
// const postEndPoint = 'https://hacker-news.firebaseio.com/v0/item/story_id.json?print=pretty' // returns a json of posts


export function fetchHN() {
  const obj = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  }

   return  (dispatch) => {
    dispatch({ type: 'LOADING_REDDIT', loading: true });// should indicate that the data is loading

     fetch(topstoriesEndPoint, obj)
       .then(resp => resp.json())
       .then(data => data.slice(0, 10))
       .then(ids => getStories(ids, dispatch));
 };
}

function getStories(ids, dispatch) {
  const stories = [];
  ids.map(id => {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      .then(story => story.json())
      .then(story =>stories.push(story))
  }).then(dispatch({
    type: 'ADD_HN',
    loading: false,
    arrayOfObjects: stories
  }))

};

