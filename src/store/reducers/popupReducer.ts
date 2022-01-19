import { ActionPopup } from '../actions/index';
import { ActionTypes } from '../types/index';

const initialState = false

export const popupReducer = (state = initialState, action: ActionPopup) => {
    switch (action.type) {
        case ActionTypes.POPUP_PHONE:
            return action.payload
        default:
            return state
    }
}