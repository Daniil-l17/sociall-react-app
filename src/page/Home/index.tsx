import { Loader } from '@mantine/core';
import { HomeProfileUser } from '../../components/ProfileUser';
import { $HomeContentWrapper, HomeWrapper } from './style';
import { useAuth } from '../../hooks/userAuth';
import { useQuery } from '@tanstack/react-query';
import { PostsService } from './services';
import { Content } from './components/Content';
import { Error } from './components/error';
export const Home = () => {
	const { isLoading: isLoadingUser, user } = useAuth();

	const { data, isLoading, error } = useQuery({
		queryKey: ['postsAll'],
		queryFn: async () => {
			return await PostsService.posts();
		},
		retry: 1,
		refetchOnWindowFocus: false
	});

	console.log(error?.message);

	return (
		<HomeWrapper>
			<$HomeContentWrapper>
				{isLoading || isLoadingUser ? <Loader mt={40} /> : error?.message === 'Request failed with status code 401' ? <p>Авторизайтесь</p> : !data ? <Error /> : <Content data={data!} />}
			</$HomeContentWrapper>
			<HomeProfileUser user={user} isLoading={isLoadingUser} />
		</HomeWrapper>
	);
};
