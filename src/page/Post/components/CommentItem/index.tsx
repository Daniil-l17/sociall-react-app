import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Avatar, Loader } from '@mantine/core';
import { $ContentDescription, $ContentItem, $ContentItemHeader, $ContentItemHeaderDeleteIcon, $ContentItemHeaderUserInfo, $ContentItemHeaderUserInfoName } from './style';
import { PropsCommentItem } from './types';

export const CommentItem: FC<PropsCommentItem> = ({ comment, user, mutate, isPending }) => {
	const [deleteId, setDeleteId] = useState('');

	return (
		<motion.div whileHover={{ scale: 1.02, transition: { duration: 0.3 }, opacity: 0.75 }} transition={{ duration: 0.4 }}>
			<div style={{ position: 'relative', width: '100%' }}>
				<$ContentItemHeaderDeleteIcon>
					{user?.id === comment.user.id ? (
						isPending && deleteId === comment.id ? (
							<Loader size={20} />
						) : (
							<motion.div whileHover={{ scale: 1.2, transition: { duration: 0.3 } }} transition={{ duration: 0.5 }}>
								<RiDeleteBin6Line
									onClick={() => {
										setDeleteId(comment.id), mutate({ contentId: comment.id });
									}}
									style={{ cursor: 'pointer', zIndex: 2, fontSize: '17px' }}
								/>
							</motion.div>
						)
					) : null}
				</$ContentItemHeaderDeleteIcon>
				<Link to={`/users/${comment.user.id}`}>
					<$ContentItem>
						<$ContentItemHeader>
							<$ContentItemHeaderUserInfo>
								<Avatar size='md' src={`${import.meta.env['VITE_BAC_STORE_IMG_URL']}${comment.user.avatarUrl}`} alt="it's me" />
								<div>
									<$ContentItemHeaderUserInfoName>{comment.user.name}</$ContentItemHeaderUserInfoName>
								</div>
							</$ContentItemHeaderUserInfo>
							<$ContentDescription>{comment.content}</$ContentDescription>
						</$ContentItemHeader>
					</$ContentItem>
				</Link>
			</div>
		</motion.div>
	);
};
