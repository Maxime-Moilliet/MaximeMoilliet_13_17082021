import { USER_INFO, USER_INFO_FAILED, USER_INFO_UPDATED } from "../constants/userConstants";

const userReducer = (state = [], action) => {
    switch (action.type) {
        case USER_INFO:
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                userInfoFailed: ''
            }
        case USER_INFO_FAILED:
            return {
                ...state,
                firstName: '',
                lastName: '',
                userInfoFailed: action.payload
            }
        case USER_INFO_UPDATED:
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
            }
        default:
            return state
    }
}

export default userReducer;