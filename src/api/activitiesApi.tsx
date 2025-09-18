import api from './axiosConfig'

export const fetchActivities = async () => {
  try {
    const response = await api.get('/activities')
    return response.data
  } catch (error) {
    console.error('Failed to fetch activities:', error)
    throw error
  }
}
