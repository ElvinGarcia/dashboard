

export default function rootReducer(state ={ reddit: [], loading: false}, action){
  switch (action.type) {
    case 'LOADING_REDDIT':
      return {...state, reddit: [...state.reddit], loading: true,};

    case 'ADD_REDDIT':
      return {...state, reddit: action.reddit, loading: false,}


    default:
      return state;
  }
}

