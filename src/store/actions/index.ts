import { ActionTypes } from '../types/index';


interface PopupValue {
    type: ActionTypes.POPUP_PHONE
    payload: boolean
}

export type ActionPopup = PopupValue 