

function login({ username, password }) {
  // POST is used to hide data from the address bar
  const header = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
    }
  }
  // api/v1/users#create
  return fetch('/api/v1/users', header)
    .then(resp => resp.json())
    .then(jsonResp => console.log('jsonResp',jsonResp))
    .catch(error => console.log('an error occurred', error.message))
}



function register({ username, name, email }) {
  // POST is used to hide data from the address bar
  const header = {
    method: "POST",
    headers: { "Content-Type": "application/json", },
    body: {
      username,
      name,
      email
    }
  }
  // api/v1/users#create
  return fetch('/api/v1/users', header)
    .then(resp => resp.json())
    .then(jsonResp => console.log('jsonResp',jsonResp))
    .catch(error => console.log('an error occurred', error.message))
}



function comments({comment,url,urlid}){
  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
  }
  return fetch(`/api/v1/comments/${""}`, header)
  .then(resp => resp.json())
  .then(jsonResp => console.log('jsonResp',jsonResp))
  .catch(error => console.log('an error occurred', error.message))
}


export {login, register, comments}