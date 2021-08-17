import axios from 'axios'

export const fetchUserInfo = async () => {
    const token = JSON.parse(localStorage.getItem('auth'))[0]
    return await axios.post('/api/v1/user/profile', {}, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export const fetchUserInfoUpdate = async (values) => {
    const token = JSON.parse(localStorage.getItem('auth'))[0]
    return await axios.put('/api/v1/user/profile', values, {
        headers: { Authorization: `Bearer ${token}` }
    })
}