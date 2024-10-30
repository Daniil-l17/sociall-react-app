import { FC, useState } from 'react';
import { PropsCommentWrapper } from './types';
import {
	$ContentDescription,
	$ContentItem,
	$CommentWrapper,
	$ContentItemHeartIconWpapperContext,
	$ContentItemHeader,
	$ContentItemHeartIconWrapper,
	$ContentItemHeaderDeleteIcon,
	$ContentItemHeaderUserInfo,
	$ContentItemHeaderUserInfoDate,
	$ContentItemHeaderUserInfoName
} from './style';
import { Link } from 'react-router-dom';
import { Avatar, Loader } from '@mantine/core';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { useAuth } from '../../../../hooks/userAuth';
export const CommentWrapper: FC<PropsCommentWrapper> = ({ comments }) => {
	const [deleteId, setDeleteId] = useState('');
	let isPendingDelete = false;
	const { user } = useAuth();
	return (
		<$CommentWrapper>
			{comments.map(comment => (
				<motion.div whileHover={{ scale: 1.02, transition: { duration: 0.3 }, opacity: 0.75 }} transition={{ duration: 0.4 }}>
					<div style={{ position: 'relative', width: '100%' }}>
						<$ContentItemHeaderDeleteIcon>
							{user?.id === comment.user.id ? (
								isPendingDelete && deleteId === comment.id ? (
									<Loader size={20} />
								) : (
									<motion.div whileHover={{ scale: 1.2, transition: { duration: 0.3 } }} transition={{ duration: 0.5 }}>
										<RiDeleteBin6Line style={{ cursor: 'pointer', zIndex: 2, fontSize: '17px' }} />
									</motion.div>
								)
							) : null}
						</$ContentItemHeaderDeleteIcon>
						<$ContentItem>
							<$ContentItemHeader>
								<Link style={{ display: 'inline-block' }} to={`/users/${comment.user.id}`}>
									<$ContentItemHeaderUserInfo>
										<Avatar size='md' src={`${import.meta.env['VITE_BAC_STORE-IMG_URL']}${comment.user.avatarUrl}`} alt="it's me" />
										<div>
											<$ContentItemHeaderUserInfoName>{comment.user.name}</$ContentItemHeaderUserInfoName>
										</div>
									</$ContentItemHeaderUserInfo>
								</Link>
								<$ContentDescription>{comment.content}</$ContentDescription>
							</$ContentItemHeader>
						</$ContentItem>
					</div>
				</motion.div>
			))}
		</$CommentWrapper>
	);
};
