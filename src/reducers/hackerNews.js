

export default function hackerNews(state ={ data:[], loading: false}, action){

  switch (action.type) {

    case 'LOADING_REDDIT':
      return {...state, data: [...state.data], loading: true,};

    case 'ADD_REDDIT':
      return {...state, data: action.arrayOfObjects, loading: false,}

    case 'LOADING_HN':
        return {...state, data: [...state.data], loading: true,};

    case 'ADD_HN':
        return {...state, data: action.arrayOfObjects, loading: false,}

    default:
      return state;
  }
}

