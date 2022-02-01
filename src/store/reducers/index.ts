import { combineReducers } from "redux";
import { popupReducer } from './popupReducer';
import { userInfoReducer } from './userInfoReducer';

export const rootReducer = combineReducers({
    popup: popupReducer,
    userInfo: userInfoReducer,
})

export default rootReducer;

export type  State = ReturnType<typeof rootReducer>;