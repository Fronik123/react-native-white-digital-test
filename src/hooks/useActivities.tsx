import { useQuery } from '@tanstack/react-query'
import { fetchActivities } from '../api/activitiesApi'
import { IActivities } from 'data/types/activities'

export const useActivities = () => {
  return useQuery<IActivities[]>({
    queryKey: ['activities'],
    queryFn: fetchActivities,
  })
}
