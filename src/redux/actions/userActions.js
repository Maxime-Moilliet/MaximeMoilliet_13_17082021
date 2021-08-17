import { USER_INFO_REQUESTED, USER_INFO_UPDATED_REQUESTED } from "../constants/userConstants"

export const getUserInfo = () => {
    return {
        type: USER_INFO_REQUESTED
    }
}

export const userInfoUpdate = (values) => {
    return {
        type: USER_INFO_UPDATED_REQUESTED,
        payload: values
    }
}