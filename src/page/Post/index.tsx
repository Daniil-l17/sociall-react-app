import { useQuery } from '@tanstack/react-query';
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
	$ContentItemHeaderUserInfoDate,
	$ContentItemHeaderUserInfoName
} from './style';
import { Avatar, Button, Textarea } from '@mantine/core';
import { useEffect, useState } from 'react';

export const Post = () => {
	const { user, isFetching: isFetchingUser } = useAuth();
	const { id } = useParams();
	const [value, setValue] = useState('');
	const navigate = useNavigate();
	const { data, isFetching } = useQuery({
		queryKey: ['post'],
		queryFn: async () => {
			return await PostsService.currentPost(id!);
		}
	});

	useEffect(() => {
		if ((!isFetching && !isFetchingUser && !user) || !data) {
			navigate('/');
		}
	}, [data, isFetching, isFetchingUser]);

	if (!data || !user) {
		return null;
	}

	return (
		<div style={{ position: 'relative', width: '100%' }}>
			<$ContentItem>
				<$ContentItemHeader>
					<Link style={{ display: 'inline-block' }} to={`/users/${data.author.id}`}>
						<$ContentItemHeaderUserInfo>
							<Avatar size='md' src={`${import.meta.env['VITE_BAC_STORE-IMG_URL']}${data.author.avatarUrl}`} alt="it's me" />
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
					<Button w={200}>Добавить коментарий</Button>
				</$ContentItemHearCommnetWrapperButton>
			</$ContentItemHearCommnetWrapper>
		</div>
	);
};
