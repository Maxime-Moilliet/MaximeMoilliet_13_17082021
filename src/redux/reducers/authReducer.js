const { USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, USER_IS_LOGIN_SUCCESS, USER_IS_LOGIN_FAILED, USER_LOGOUT } = require("../constants/authConstants")

const authReducer = (state = { userToken: [] }, action) => {
    switch(action.type) {
        case USER_LOGIN_SUCCESS:
            localStorage.setItem('auth', JSON.stringify([action.payload]))
            return {
                ...state,
                userToken: [action.payload],
                errorLoginFailed: '',
                errorLogoutFailed: '', 
                isLogged: true
            }
        case USER_LOGIN_FAILED:
            localStorage.setItem('auth', JSON.stringify([]))
            return {
                ...state,
                userToken: [],
                errorLoginFailed: action.payload,
                errorLogoutFailed: '', 
                isLogged: false
            }
        case USER_IS_LOGIN_SUCCESS:
            const token = JSON.parse(localStorage.getItem('auth'))[0]
            return {
                ...state,
                userToken: [token],
                errorLoginFailed: '',
                errorLogoutFailed: '', 
                isLogged: true,
            }
        case USER_IS_LOGIN_FAILED: 
            localStorage.setItem('auth', JSON.stringify([]))
            return {
                ...state,
                userToken: [],
                errorLoginFailed: '',
                errorLogoutFailed: '', 
                isLogged: false,
            }
        case USER_LOGOUT:
            localStorage.setItem('auth', JSON.stringify([]))
            return{
                ...state,
                userToken: [],
                errorLoginFailed: '',
                errorLogoutFailed: '', 
                isLogged: false,
            }
        default:
            return state
    }
}

export default authReducer;