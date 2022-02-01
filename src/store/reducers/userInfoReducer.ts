import { ActionUserInfo } from '../actions/index';
import { ActionTypes } from '../types/index';

const initialState = {
    
}

export const userInfoReducer = (state = initialState, action: ActionUserInfo) => {
    switch (action.type) {
        case ActionTypes.USERINFO:
            return action.payload
        default:
            return state
    }
}