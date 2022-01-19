import { ActionTypes } from "../types";
import { Dispatch } from "redux";
import { ActionPopup } from "../actions/index";

export const changeStatusPopup  = (amount: boolean) => {
    return (dispatch: Dispatch<ActionPopup>) => {
        dispatch({
            type: ActionTypes.POPUP_PHONE,
            payload: amount
        })
    }
}