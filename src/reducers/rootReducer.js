import { combineReducers } from 'redux';
import reddit from './reddit';
import hackerNews from './hackerNews'

export default  combineReducers({reddit, hackerNews})




// (alias) function combineReducers<S>(reducers: ReducersMapObject<S, any>): Reducer<CombinedState<S>> (+2 overloads)
// import combineReducers
