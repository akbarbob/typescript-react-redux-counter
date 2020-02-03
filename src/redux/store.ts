import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk , {ThunkMiddleware}from 'redux-thunk';
import itemReducer from './index';
import { AppActions } from './types/actionType';

const rootReducer=combineReducers({
    counters:itemReducer
})
export type AppState= ReturnType<typeof rootReducer>
export const store=createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware< AppState,AppActions>))

