import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '../../hooks/userAuth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PostsService } from '../Home/services';
import {
	$ContentDescription,
	$ContentItem,
	$ContentItemHearCommnetWrapperButton,
	$ContentItemHearCommnetWrapper,
	$ContentItemHeader,
	$ContentItemHeaderUserInfo,
	$LoaderWrapper,
	$ContentItemHeaderUserInfoDate,
	$ContentItemHeaderUserInfoName
} from './style';
import { Avatar, Button, Loader, Textarea } from '@mantine/core';
import { useEffect, useState } from 'react';
import { CommentWrapper } from './components/CommentWrapper';
import { PostServiceComment } from './services';
import { toast } from 'react-toastify';

export const Post = () => {
	const { user, isFetching: isFetchingUser } = useAuth();
	const { id } = useParams();
	const [value, setValue] = useState('');
	const navigate = useNavigate();
	const queryClien = useQueryClient();

	const { data, isFetching } = useQuery({
		queryKey: ['post'],
		queryFn: async () => {
			return await PostsService.currentPost(id!);
		}
	});

	const { mutate, isPending } = useMutation({
		mutationKey: ['comments'],
		mutationFn: async ({ id, contentId }: { id?: string; contentId?: string }) => {
			if (contentId) {
				return await PostServiceComment.deleteComment(contentId);
			}
			return await PostServiceComment.createComment(id!, value);
		},
		onSuccess: () => {
			setValue('');
			toast.success('Комментарий добавлен', { theme: 'colored' });
			queryClien.invalidateQueries({ queryKey: ['post'] });
		}
	});

	useEffect(() => {
		if (!isFetching && !isFetchingUser) {
			if (!data || !user) {
				navigate('/');
			}
		}
	}, [data, isFetching, user, isFetchingUser]);

	if (isFetching || isFetchingUser) {
		return (
			<$LoaderWrapper>
				<Loader size={30} />
			</$LoaderWrapper>
		);
	}

	if (!data || !user) {
		return null;
	}

	return (
		<div style={{ position: 'relative', width: '100%' }}>
			<$ContentItem>
				<$ContentItemHeader>
					<Link style={{ display: 'inline-block' }} to={`/users/${data.author.id}`}>
						<$ContentItemHeaderUserInfo>
							<Avatar size='md' src={`${import.meta.env['VITE_BAC_STORE_IMG_URL']}${data.author.avatarUrl}`} alt="it's me" />
							<div>
								<$ContentItemHeaderUserInfoName>{data.author.name}</$ContentItemHeaderUserInfoName>
								<$ContentItemHeaderUserInfoDate>{new Date(data.createdAt).toLocaleDateString()}</$ContentItemHeaderUserInfoDate>
							</div>
						</$ContentItemHeaderUserInfo>
					</Link>
					<$ContentDescription>{data.content}</$ContentDescription>
				</$ContentItemHeader>
			</$ContentItem>
			<$ContentItemHearCommnetWrapper>
				<Textarea placeholder='Добавить коментарий' autosize minRows={2} maxRows={4} value={value} onChange={e => setValue(e.currentTarget.value)} />
				<$ContentItemHearCommnetWrapperButton>
					<Button onClick={() => mutate({ id: data.id })} w={200}>
						Добавить коментарий
					</Button>
				</$ContentItemHearCommnetWrapperButton>
			</$ContentItemHearCommnetWrapper>
			<CommentWrapper isPending={isPending} mutate={mutate} user={user} comments={data.comments} />
		</div>
	);
};
