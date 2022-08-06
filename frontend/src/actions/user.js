import {store} from "../index"

function setUser(obj) {
 store.dispatch({
    type: 'ADD_USER',
    loading: false,
    user: obj,
  })
}

function setJwt(obj){
  return Object(obj).hasOwnProperty("jwt") ? localStorage.setItem("jwt",obj.jwt) : null
}

function getJwt() {
  return localStorage.getItem('jwt');
}

function getlocalStorage(name) {
  return localStorage.getItem(name);
}

function isLoggedIn() {
  return !!getlocalStorage("jwt")

}
export { setJwt, getlocalStorage,setUser, isLoggedIn,getJwt }

