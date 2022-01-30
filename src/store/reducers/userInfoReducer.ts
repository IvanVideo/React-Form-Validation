import { ActionUserInfo } from '../actions/index';
import { ActionTypes } from '../types/index';

const initialState = {
    surname: 'Иванов',
    name: 'Иван',
    middleName: 'Иванович',
    cardName: 'IVAN IVANOV',
    dateOfBorn: '01.01.1990',
    email: 'example@example.com',
    mobile: '+7 (xxx) xxx-xx-xx',
    series: 'xxxx',
    number: 'xxxxxx',
    dateOfIssue: '01.01.1990',
}

export const userInfoReducer = (state = initialState, action: ActionUserInfo) => {
    switch (action.type) {
        case ActionTypes.USERINFO:
            return action.payload
        default:
            return state
    }
}