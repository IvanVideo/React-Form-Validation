import { combineReducers } from "redux";
import { timer } from "../action-creators";
import { popupReducer } from './popupReducer';
import { timerReducer } from './timerReducer';


export const rootReducer = combineReducers({
    popup: popupReducer,
    timer: timerReducer,
})

export default rootReducer;

export type  State = ReturnType<typeof rootReducer>;