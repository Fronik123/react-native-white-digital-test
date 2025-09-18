import axios from 'axios'
import { API_URL } from '@env'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(
  response => response,
  error => {
    try {
      console.error('API Error:', error.response?.data || error.message)
    } catch (error_) {
      console.error('Unexpected error in interceptor:', error_)
    }
    return Promise.reject(error)
  },
)

export default api
