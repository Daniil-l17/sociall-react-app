import { useQuery } from '@tanstack/react-query';
import { AuhtService } from '../services';

export const useAuth = () => {
	const { error, data, isFetching, status, isLoading, refetch, isPending, isError } = useQuery({
		queryKey: ['userAuth'],
		queryFn: async () => {
			return await AuhtService.currentUser();
		},
		retry: 1,
		staleTime: 0,
		refetchOnWindowFocus: false
	});

	return { isFetching, error, status, user: data, isLoading, refetch, isPending, isError };
};
