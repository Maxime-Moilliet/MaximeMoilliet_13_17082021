import { USER_IS_LOGIN_REQUESTED, USER_LOGIN_REQUESTED, USER_LOGOUT_REQUESTED } from '../constants/authConstants'

export const loginUser = (values) => {
    return {
        type: USER_LOGIN_REQUESTED,
        payload: values
    }
}

export const userIsLogin = () => {
    return {
        type: USER_IS_LOGIN_REQUESTED
    }
}

export const userLogout = () => {
    return {
        type: USER_LOGOUT_REQUESTED
    }
}