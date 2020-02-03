import {INCREMENT_ITEM, DECREMENT_ITEM, AppActions} from './types/actionType';


export interface InitialStateInterface{
 pending:boolean;
 count:number;
}

const initialState: InitialStateInterface={
    count:0,
    pending:false
};



function itemReducer(state=initialState, {type, payload}: AppActions):InitialStateInterface{
 switch(type){
     case INCREMENT_ITEM:
         return{
             ...state,
             count:state.count+payload
         }
    case DECREMENT_ITEM:
        return{
            ...state,
            count:state.count-payload
        }
     default:
         return{
             ...state
         }
 }
}

export default itemReducer;