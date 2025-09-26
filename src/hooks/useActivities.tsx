import { useQuery } from '@tanstack/react-query'
import api from '@api/axiosConfig'
import { IActivities } from 'data/types/activities'

export const useActivities = () => {
  return useQuery<IActivities[]>({
    queryKey: ['get activities'],
    queryFn: async () => {
      const res = await api.get<IActivities[]>('/activities')
      return res.data
    },
  })
}
