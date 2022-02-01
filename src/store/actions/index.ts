import { ActionTypes } from '../types/index';

interface PopupValue {
    type: ActionTypes.POPUP_PHONE
    payload: boolean
}

interface DataInfo {
    type: ActionTypes.USERINFO
    payload: any
}

export type ActionPopup = PopupValue 
export type ActionUserInfo = DataInfo