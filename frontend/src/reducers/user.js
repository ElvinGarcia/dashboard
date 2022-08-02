export default function user(state ={ data:[], }, action){

  switch (action.type) {
    case 'ADD_USER':
      console.log("user was added to the ReduxStore" )
        return {...state, data: action.user,}

    default:
      return state;
  }
}

