import axios from 'axios';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT
const axiosInstance = axios.create({ baseURL: `${API_ENDPOINT}` })

export const BackendApi = {
    users: {
        getAll: async () => {
            try {
                const res = await axiosInstance.get('/users')
                return res.data
            } 
            catch (e) {
                console.log(e)
            }
        }
    },
    payments: {
        getAll: async () => {
            try {
                const res = await axiosInstance.get('/payments')
                return res.data
            } 
            catch (e) {
                console.log(e)
            }
        }
    }
}
