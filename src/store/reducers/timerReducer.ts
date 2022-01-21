import { ActionTimer } from '../actions/index';
import { ActionTypes } from '../types/index';

const initialState = 20

export const timerReducer = (state = initialState, action: ActionTimer) => {
    switch (action.type) {
        case ActionTypes.TIMER:
            return action.payload
        default:
            return state
    }
}