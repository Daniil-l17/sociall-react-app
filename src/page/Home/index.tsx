import { Loader } from '@mantine/core';
import { HomeProfileUser } from '../../components/ProfileUser';
import { $HomeContentWrapper, HomeWrapper, $HomeProfileUserWpapper } from './style';
import { useAuth } from '../../hooks/userAuth';
import { useQuery } from '@tanstack/react-query';
import { PostsService } from './services';
import { Content } from './components/Content';
import { Error } from './components/error';
import { AnimatePresence } from 'framer-motion';
import { AuthMessaage } from './components/AuthMessage';
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

	return (
		<HomeWrapper>
			<$HomeContentWrapper>
				{isLoading || isLoadingUser ? <Loader mt={40} /> : error?.message === 'Request failed with status code 401' ? <AuthMessaage /> : !data ? <Error /> : <Content data={data!} />}
			</$HomeContentWrapper>
			<$HomeProfileUserWpapper>
				<AnimatePresence>{!isLoading && !user ? null : <HomeProfileUser user={user} isLoading={isLoadingUser} />}</AnimatePresence>
			</$HomeProfileUserWpapper>
		</HomeWrapper>
	);
};
