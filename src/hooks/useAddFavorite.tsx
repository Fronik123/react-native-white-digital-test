import { useMutation } from '@tanstack/react-query'
import { addFavorite } from '../api/favorites'

export const useAddFavorite = (
  setMessage: React.Dispatch<React.SetStateAction<string>>,
) => {
  return useMutation<unknown, Error, number>({
    mutationFn: addFavorite,
    onSuccess: (res: any) => {
      setMessage(res.message)
    },
    onError: error => {
      setMessage(error.message)
    },
  })
}
