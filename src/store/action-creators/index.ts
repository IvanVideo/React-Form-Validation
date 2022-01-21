import { ActionTypes } from "../types";
import { Dispatch } from "redux";
import { ActionPopup } from "../actions/index";
import { ActionTimer } from "../actions/index";

export const changeStatusPopup  = (amount: boolean) => {
    return (dispatch: Dispatch<ActionPopup>) => {
        dispatch({
            type: ActionTypes.POPUP_PHONE,
            payload: !amount
        })
    }
}

export const timer  = (amount: number) => {
    return (dispatch: Dispatch<ActionTimer>) => {
        dispatch({
            type: ActionTypes.TIMER,
            payload: amount
        })
    }
}