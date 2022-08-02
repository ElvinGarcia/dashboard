import { setJwt } from "./clientStorage";
import {setUser} from "./user";

 async function login({ email, password }) {
  // POST is used to hide data from the address bar
  const header = {
      method: "POST",
    headers: { "Content-Type": "application/json", },
    credentials: 'same-origin',
    body: JSON.stringify({user:{ email, password }})
  }
  // api/v1/users#create
  try {
    const resp = await fetch('/login', header)
    const data = await resp.json()
    console.log('data', data)
    setJwt(data);
    // save the token to localStorage for future access
    return setUser(data.user); // { id: null, username: "Bill", name: "Bob", email: "Bob@Bill.com" }

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
    const data = await resp.json();
    console.log('response', data);
    setJwt(data);
    return setUser(data.user); // { id: null, username: "Bill", name: "Bob", email: "Bob@Bill.com" }
    }
   catch (error) {
    return console.log('an error occurred', error.message)
  }
}


 async function comments({comment,url,urlid}){
  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer <token>`,
    },
    body: JSON.stringify({comment,url,urlid})
  }
  try {
    const resp = await fetch(`/comments/${""}`, header)
    const data = await resp.json()
    return console.log('data', data)
  } catch (error) {
    return console.log('an error occurred', error.message)
  }
}

export {login, register, comments}