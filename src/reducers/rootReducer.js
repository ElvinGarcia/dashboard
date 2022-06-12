

export default function rootReducer(state ={ reddit: [], loading: false}, action){
  switch (action.type) {
    case 'LOADING_REDDIT':
      return {...state, cats: [...state.cats], loading: true,};

    case 'ADD_REDDIT':
      return {...state, cats: action.cats, loading: false,}


    default:
      return state;
  }
}

