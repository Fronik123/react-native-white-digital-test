import { useQuery } from '@tanstack/react-query'
import { fetchActivities } from '../api/activitiesApi'
import { TActivities } from 'data/types/activities'

export const useActivities = () => {
  return useQuery<TActivities[]>({
    queryKey: ['activities'],
    queryFn: fetchActivities,
  })
}
