

export default function reddit(state ={ reddit: [], HN:[], loading: false}, action){

  switch (action.type) {

    case 'LOADING_REDDIT':
      return {...state, reddit: [...state.reddit], loading: true,};

    case 'ADD_REDDIT':
      return {...state, reddit: action.arrayOfObjects, loading: false,}

    case 'LOADING_HN':
        return {...state, HN: [...state.HN], loading: true,};

    case 'ADD_HN':
        return {...state, HN: action.arrayOfObjects, loading: false,}

    default:
      return state;
  }
}

