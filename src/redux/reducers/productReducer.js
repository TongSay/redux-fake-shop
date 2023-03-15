import { ActionTypes } from "../contants/action-type";

const initialState = {
    products:[]
    
}

export const productReducer = (state=initialState, {type, payload}) => {
    console.log("daraaa", payload);
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload};
            
        default:
            return state;
    }
}