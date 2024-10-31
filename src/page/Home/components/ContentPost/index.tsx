import { Link } from 'react-router-dom';
import { FC, useState } from 'react';
import { Avatar, Loader } from '@mantine/core';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {
	$ContentDescription,
	$ContentItem,
	$ContentItemHeartIconWpapperContext,
	$ContentItemHeader,
	$ContentItemHeartIconWrapper,
	$ContentItemHeaderDeleteIcon,
	$ContentItemHeaderUserInfo,
	$ContentItemHeaderUserInfoDate,
	$ContentItemHeaderUserInfoName
} from './style';
import { motion } from 'framer-motion';
import { ContentitemProps } from './types';
import { variantsAnimate } from '../../utils';
import * as IconHeart from '../Icon';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PostsService } from '../../services';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import relativetime from 'dayjs/plugin/relativeTime';
import { localeObject } from '../../../../utils';

dayjs.extend(relativetime);

export const Contentitem: FC<ContentitemProps> = ({ item, mutateDelete, index, isPendingDelete, user }) => {
	const [deleteId, setDeleteId] = useState('');
	const queryClient = useQueryClient();

	function handelClickMutateDelete() {
		mutateDelete(item.id);
		setDeleteId(item.id);
	}

	const { isPending, mutate } = useMutation({
		mutationKey: ['likePost'],
		mutationFn: async (id: string) => {
			if (item.likes.some(el => el.userId === user?.id)) {
				return await PostsService.deleteLikePost(id);
			}
			return await PostsService.likePost(id);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['postsAll'] });
			toast.success(item.likes.some(el => el.userId === user?.id) ? 'Лайк убран' : 'Лайк поставлен', { theme: 'colored' });
		}
	});

	return (
		<motion.div
			variants={variantsAnimate}
			initial={'initialElement'}
			animate={'animateElement'}
			exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
			whileHover={{ scale: 1.02, transition: { duration: 0.3 }, opacity: 0.75 }}
			transition={{ duration: 0.4 }}
			custom={index}
		>
			<div style={{ position: 'relative', width: '100%' }}>
				<$ContentItemHeaderDeleteIcon>
					{user?.id === item.author.id ? (
						isPendingDelete && deleteId === item.id ? (
							<Loader size={20} />
						) : (
							<motion.div whileHover={{ scale: 1.2, transition: { duration: 0.3 } }} transition={{ duration: 0.5 }}>
								<RiDeleteBin6Line
									onClick={() => {
										handelClickMutateDelete();
									}}
									style={{ cursor: 'pointer', zIndex: 2, fontSize: '17px' }}
								/>
							</motion.div>
						)
					) : null}
				</$ContentItemHeaderDeleteIcon>
				<$ContentItem>
					<$ContentItemHeader>
						<Link to={`/posts/${item.id}`}>
							<Link style={{ display: 'inline-block' }} to={`/users/${item.author.id}`}>
								<$ContentItemHeaderUserInfo>
									<Avatar size='md' src={`${import.meta.env['VITE_BAC_STORE-IMG_URL']}${item.author.avatarUrl}`} alt="it's me" />
									<div>
										<$ContentItemHeaderUserInfoName>{item.author.name}</$ContentItemHeaderUserInfoName>
										<$ContentItemHeaderUserInfoDate>{dayjs(item.createdAt).locale(localeObject).fromNow()}</$ContentItemHeaderUserInfoDate>
									</div>
								</$ContentItemHeaderUserInfo>
							</Link>
							<$ContentDescription>{item.content}</$ContentDescription>
						</Link>
						{isPending ? (
							<Loader size={20} />
						) : (
							<$ContentItemHeartIconWpapperContext>
								<$ContentItemHeartIconWrapper onClick={() => mutate(item.id)}>
									<h2 style={{ marginTop: '2px', fontWeight: '500' }}>{item.likes.length}</h2>
									{item.likes.some(el => el.userId === user?.id) ? <IconHeart.HeartLike /> : <IconHeart.HeartIcon />}
								</$ContentItemHeartIconWrapper>
								<$ContentItemHeartIconWrapper>
									<h2 style={{ marginTop: '2px', fontWeight: '500' }}>{item.comments.length}</h2>
									{<IconHeart.CommentIcon />}
								</$ContentItemHeartIconWrapper>
							</$ContentItemHeartIconWpapperContext>
						)}
					</$ContentItemHeader>
				</$ContentItem>
			</div>
		</motion.div>
	);
};
