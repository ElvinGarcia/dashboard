

async function login({ username, password }) {
  // POST is used to hide data from the address bar
  const header = {
      method: "POST",
    headers: { "Content-Type": "application/json", },
    credentials: 'same-origin',
    body: JSON.stringify({ username, password })
  }
  // api/v1/users#create
  try {
    const resp = await fetch('/login', header)
    const jsonResp = await resp.json()
    return console.log('jsonResp', jsonResp)
  } catch (error) {
    return console.log('an error occurred', error.message)
  }
}



async function register({ name, email, username, password }) {
  // POST is used to hide data from the address bar
  const header = {
    method: "POST",
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify({ user: { name, email, username, password } } )
  }
  // api/v1/users#create
  try {
    const resp = await fetch('/users', header)
    const jsonResp = await resp.json()
     console.log('this is the responce in JSON formatxs', jsonResp)
  } catch (error) {
    return console.log('an error occurred', error.message)
  }
}



async function comments({comment,url,urlid}){
  const header = {
    method: "POST",
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify({comment,url,urlid})
  }
  try {
    const resp = await fetch(`/comments/${""}`, header)
    const jsonResp = await resp.json()
    return console.log('jsonResp', jsonResp)
  } catch (error) {
    return console.log('an error occurred', error.message)
  }
}


export {login, register, comments}