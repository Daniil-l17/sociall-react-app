import { PostsService } from '../../services';
import { FC } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '../../../../hooks/userAuth';
import { $ContentWrapper, $ContentItemWrapper } from './style';
import { Contentitem } from '../ContentPost';
import { toast } from 'react-toastify';
import { AnimatePresence } from 'framer-motion';
import { PropsContent } from './types';

export const Content: FC<PropsContent> = ({ data }) => {
	const queryClient = useQueryClient();
	const { user } = useAuth();

	const { isPending: isPendingDelete, mutate: mutateDelete } = useMutation({
		mutationKey: ['deletePost'],
		mutationFn: async (id: string) => {
			return await PostsService.deletePost(id);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['postsAll'] });
			toast.success('Пост удален', { theme: 'colored' });
		}
	});

	return (
		<$ContentWrapper>
			<$ContentItemWrapper>
				<AnimatePresence>
					{data.map((item, index) => (
						<Contentitem index={index} isPendingDelete={isPendingDelete} key={item.id} item={item} mutateDelete={mutateDelete} user={user!} />
					))}
				</AnimatePresence>
			</$ContentItemWrapper>
		</$ContentWrapper>
	);
};
