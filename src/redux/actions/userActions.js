import { USER_INFO_REQUESTED } from "../constants/userConstants"

export const getUserInfo = () => {
    return {
        type: USER_INFO_REQUESTED
    }
}