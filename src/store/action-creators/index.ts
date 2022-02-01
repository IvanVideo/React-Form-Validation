import { ActionTypes } from "../types";
import { Dispatch } from "redux";
import { ActionPopup } from "../actions/index";
import { ActionUserInfo} from "../actions/index";

export const changeStatusPopup  = (amount: boolean) => {
    return (dispatch: Dispatch<ActionPopup>) => {
        dispatch({
            type: ActionTypes.POPUP_PHONE,
            payload: !amount
        })
    }
}

export const userInfo  = (amount: any) => {
    return (dispatch: Dispatch<ActionUserInfo>) => {
        dispatch({
            type: ActionTypes.USERINFO,
            payload: amount
        })
    }
}