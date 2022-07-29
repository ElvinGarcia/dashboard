


 const setJwt =(obj)=> {
  return Object(obj).hasOwnProperty("jwt") ? localStorage.setItem("jwt",obj.jwt) : null
}

const getlocalStorage= (name) => {
  return localStorage.getItem(name);
}

export { setJwt, getlocalStorage }
