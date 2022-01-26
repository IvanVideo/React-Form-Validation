import { combineReducers } from "redux";
import { timer } from "../action-creators";
import { popupReducer } from './popupReducer';
import { timerReducer } from './timerReducer';
import { userInfoReducer } from './userInfoReducer';

export const rootReducer = combineReducers({
    popup: popupReducer,
    timer: timerReducer,
    userInfo: userInfoReducer,
})

export default rootReducer;

export type  State = ReturnType<typeof rootReducer>;