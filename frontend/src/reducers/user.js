export default function hackerNews(state ={ data:[], }, action){

  switch (action.type) {

    case 'ADD_USER':
        return {...state, data: action.arrayOfObjects,}

    default:
      return state;
  }
}

