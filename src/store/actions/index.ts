import { ActionTypes } from '../types/index';

interface PopupValue {
    type: ActionTypes.POPUP_PHONE
    payload: boolean
}

interface TimerValue {
    type: ActionTypes.TIMER
    payload: number
}

interface DataInfo {
    type: ActionTypes.USERINFO
    payload: any
}

export type ActionPopup = PopupValue 
export type ActionTimer = TimerValue
export type ActionUserInfo = DataInfo