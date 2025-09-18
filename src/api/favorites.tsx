import api from './axiosConfig'

export const addFavorite = async (id: number) => {
  try {
    const response = await api.post('/favorites', { id })
    return response.data
  } catch (error: any) {
    console.error(
      'Error adding to favorites:',
      error.response?.data || error.message,
    )
    throw error
  }
}
