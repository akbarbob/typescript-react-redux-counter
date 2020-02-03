import {AppActions,INCREMENT_ITEM,DECREMENT_ITEM} from './types/actionType';
import { Dispatch } from 'react';
import { AppState } from './store';

export const increment=(count: number): AppActions=>{
    return{
        type:INCREMENT_ITEM,
        payload:count
    }
}

export const decrement=(count: number): AppActions=>{
    return{
        type:DECREMENT_ITEM,
        payload:count
    }
}

export const middIncrement=(count: number)=>{
    return (dispatch: Dispatch<AppActions>, getState: ()=>AppState)=>{
     dispatch(increment(count))
    }
}

export const middDecrement=(count: number)=>{
    return (dispatch: Dispatch<AppActions>, getState: ()=>AppState)=>{
        dispatch(decrement(count))
    }
}