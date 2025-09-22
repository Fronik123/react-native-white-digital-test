import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError: (error: unknown) => {
        if (error instanceof Error) {
          console.error('Mutation Error:', error.message)
        }
      },
    },
  },
})
