import { combineReducers } from "redux";
import { popupReducer } from './popupReducer';


export const rootReducer = combineReducers({
    popup: popupReducer,
})

export default rootReducer;

export type  State = ReturnType<typeof rootReducer>;