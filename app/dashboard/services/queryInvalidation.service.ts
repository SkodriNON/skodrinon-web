import { QueryClient } from '@tanstack/react-query'

export const invalidateDashboardQueries = async (
  queryClient: QueryClient,
  address?: string
) => {
  if (!address) return

  await Promise.all([
    queryClient.invalidateQueries({
      queryKey: ['staking-data', address],
    }),

    queryClient.invalidateQueries({
      queryKey: ['pending-rewards', address],
    }),

    queryClient.invalidateQueries({
      queryKey: ['portfolio-metrics', address],
    }),

    queryClient.invalidateQueries({
      queryKey: ['portfolio-history', address],
    }),

    queryClient.invalidateQueries({
      queryKey: ['wallet-score', address],
    }),

    queryClient.invalidateQueries({
      queryKey: ['activity', address],
    }),

    queryClient.invalidateQueries({
      queryKey: ['transactions', address],
    }),
  ])
}