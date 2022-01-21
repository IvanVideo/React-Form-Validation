import { ActionTypes } from '../types/index';


interface PopupValue {
    type: ActionTypes.POPUP_PHONE
    payload: boolean
}

interface TimerValue {
    type: ActionTypes.TIMER
    payload: number
}

export type ActionPopup = PopupValue 
export type ActionTimer = TimerValue 