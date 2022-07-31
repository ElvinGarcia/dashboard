export default function user(state ={ data:[], }, action){

  switch (action.type) {
    case 'ADD_USER':
      console.log("ADD_USER was a hit",action )
        return {...state, data: action.user,}

    default:
      return state;
  }
}

