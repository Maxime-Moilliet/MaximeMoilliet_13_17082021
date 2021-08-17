import axios from 'axios'

export const fetchAuthLogin = async (values) => {
   return await axios.post('/api/v1/user/login', values)
}
