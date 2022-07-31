import {store} from "../index"

function setUser(obj) {
 store.dispatch({
    type: 'ADD_USER',
    loading: false,
    user: obj,
  })
}


export {setUser}