import { Button, Loader } from '@mantine/core';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/userAuth';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { UsersService } from './services';
import { useDisclosure } from '@mantine/hooks';
import { ModalUpdateProfile } from './components/ModalUpdateProfile';
import { useEffect } from 'react';
import {
	$LoaderWrapper,
	$UserMenu,
	$UserMenuImg,
	$UserMenuText,
	$UserWrapper,
	$UserInfo,
	$UserInfoFollowItem,
	$UserInfoFollowItemText,
	$UserInfoFollowWrapper,
	$UserInfoItem,
	$UserInfoText,
	$UsersWrapper
} from './style';

export const Users = () => {
	const { id } = useParams();
	const { user, isFetching: isFetchingUser } = useAuth();
	const [opened, { open, close }] = useDisclosure(false);
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { data, isFetching } = useQuery({
		queryKey: ['users'],
		queryFn: async () => {
			return await UsersService.getUserId(id ?? '');
		},
		retry: 1,
		refetchOnWindowFocus: false
	});

	const { isPending, mutate } = useMutation({
		mutationKey: ['follow'],
		mutationFn: async () => {
			return await UsersService.followUser(id ?? '');
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['users'] });
			queryClient.invalidateQueries({ queryKey: ['userAuth'] });
		}
	});

	const { isPending: isPendingUnfollow, mutate: mutateUnfollow } = useMutation({
		mutationKey: ['unfollowUser'],
		mutationFn: async () => {
			return await UsersService.unfollowUser(id ?? '');
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['users'] });
			queryClient.invalidateQueries({ queryKey: ['userAuth'] });
		}
	});

	function follow() {
		if (data?.id === user?.id) {
			open();
		} else {
			if (user?.following.some(item => item.followingId === data?.id)) {
				mutateUnfollow();
			} else {
				mutate();
			}
		}
	}

	useEffect(() => {
		if (!data && !user && !isFetchingUser) {
			navigate('/');
		}
	}, [data, isFetchingUser]);

	return (
		<$UsersWrapper>
			<ModalUpdateProfile data={data ?? null} opened={opened} close={close} />
			{isFetchingUser && isFetching ? (
				<$LoaderWrapper>
					<Loader />
				</$LoaderWrapper>
			) : data && user ? (
				<$UserWrapper>
					<$UserMenu>
						<$UserMenuImg src={`${import.meta.env['VITE_BAC_STORE-IMG_URL']}${data?.avatarUrl}`} alt='' />
						<$UserMenuText>{data?.name}</$UserMenuText>
						<Button color={user?.following.some(item => item.followingId === data?.id) ? 'red' : 'blue'} w={180} loading={isPending || isPendingUnfollow} onClick={follow}>
							{data?.id === user?.id ? 'Редактировать' : user.following.some(item => item.followingId === data?.id) ? 'Отписаться' : 'Подписаться'}
						</Button>
					</$UserMenu>
					<$UserInfo>
						<$UserInfoItem>
							<$UserInfoText>почта:</$UserInfoText>
							<p>{data.email}</p>
						</$UserInfoItem>
						<$UserInfoItem>
							<$UserInfoText>местоположение:</$UserInfoText>
							<p>{data.location ? data.location : 'Не указано'}</p>
						</$UserInfoItem>
						<$UserInfoItem>
							<$UserInfoText>Дата рождения:</$UserInfoText>
							<p>{data.dateOfBirth ? new Date(data.dateOfBirth).toLocaleDateString() : 'Не указана'}</p>
						</$UserInfoItem>
						<$UserInfoItem>
							<$UserInfoText>Обо мне:</$UserInfoText>
							<p>{data.bio ? data.bio : 'Не указано'}</p>
						</$UserInfoItem>
						<$UserInfoFollowWrapper>
							<$UserInfoFollowItem>
								<$UserInfoFollowItemText>{data.following.length}</$UserInfoFollowItemText>
								<p>Подписки</p>
							</$UserInfoFollowItem>
							<$UserInfoFollowItem>
								<$UserInfoFollowItemText>{data.followers.length}</$UserInfoFollowItemText>
								<p>Подписчики</p>
							</$UserInfoFollowItem>
						</$UserInfoFollowWrapper>
					</$UserInfo>
				</$UserWrapper>
			) : null}
		</$UsersWrapper>
	);
};
