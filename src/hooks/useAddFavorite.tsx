import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '@api/axiosConfig'

export const useAddFavorite = (
  setMessage: React.Dispatch<React.SetStateAction<string>>,
) => {
  const queryClient = useQueryClient()

  return useMutation<unknown, Error, number>({
    mutationFn: async (id: number) => {
      const res = await api.post('/favorites', { id })
      return res
    },
    onSuccess: (res: any) => {
      setMessage(res.message)
      queryClient.invalidateQueries({ queryKey: ['get activities'] })
    },
    onError: error => {
      setMessage(error.message)
    },
  })
}
