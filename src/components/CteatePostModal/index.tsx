import { Button, JsonInput, Modal, Textarea } from '@mantine/core';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FC, useState } from 'react';
import { PostsService } from '../../page/Home/services';
import { toast } from 'react-toastify';
import { $ContentCreate } from './style';
import type { CreatePostModalProps } from './types';
import { useNavigate } from 'react-router-dom';

export const CreatePostModal: FC<CreatePostModalProps> = ({ close, opened }) => {
	const [contentText, setContentText] = useState('');
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { isPending, mutate } = useMutation({
		mutationKey: ['createPost'],
		mutationFn: async () => {
			return await PostsService.createPost(contentText);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['postsAll'] });
			toast.success('Пост создан', { theme: 'colored' });
			close();
			setContentText('');
		}
	});

	function handelClickCreatePost() {
		if (!contentText) return;
		mutate();
		navigate('/');
	}

	return (
		<Modal size={'lg'} opened={opened} onClose={close} title='Создать пост' centered>
			<$ContentCreate>
				<Textarea minRows={4} autosize itemType='string' value={contentText} onChange={event => setContentText(event.currentTarget.value)} size='md' radius='md' placeholder='о чем думаете?' />
				<Button fullWidth onClick={handelClickCreatePost} loading={isPending} variant='filled'>
					Создать
				</Button>
			</$ContentCreate>
		</Modal>
	);
};
