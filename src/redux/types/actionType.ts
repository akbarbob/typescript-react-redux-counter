
export const INCREMENT_ITEM="INCREMENT_ITEM";
export const DECREMENT_ITEM="DECREMENT_ITEM";

export interface IncrementAction{
    type: typeof INCREMENT_ITEM,
    payload:number
}

export interface DecrementAction{
    type:typeof DECREMENT_ITEM,
    payload:number
}

export type ItemActionTypes=IncrementAction | DecrementAction;

export type AppActions=ItemActionTypes;