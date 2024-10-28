import { useQuery } from '@tanstack/react-query';
import { AuhtService } from '../services';

export const useAuth = () => {
	const { error, data, isFetching, isLoading, refetch, isPending, isError } = useQuery({
		queryKey: ['userAuth'],
		queryFn: async () => {
			return await AuhtService.currentUser();
		},
		retry: 1,
		refetchOnWindowFocus: false
	});

	return { isFetching, error, user: data, isLoading, refetch, isPending, isError };
};
