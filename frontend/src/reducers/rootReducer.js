import { combineReducers } from 'redux';
import reddit from './reddit';
import hackerNews from './hackerNews';
import user from './user';

export default combineReducers( { reddit, hackerNews, user })

// (alias) function combineReducers<S>(reducers: ReducersMapObject<S, any>): Reducer<CombinedState<S>> (+2 overloads)
// import combineReducers
