import { Link } from 'react-router-dom';
import { FC, useState } from 'react';
import { Avatar, Loader } from '@mantine/core';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {
	$ContentDescription,
	$ContentItem,
	$ContentItemHeader,
	$ContentItemHeaderDeleteIcon,
	$ContentItemHeaderUserInfo,
	$ContentItemHeaderUserInfoDate,
	$ContentItemHeaderUserInfoName
} from './style';
import { motion } from 'framer-motion';
import { ContentitemProps } from './types';

export const Contentitem: FC<ContentitemProps> = ({ item, mutateDelete, isPendingDelete, user }) => {
	const [deleteId, setDeleteId] = useState('');

	function handelClickMutateDelete() {
		mutateDelete(item.id);
		setDeleteId(item.id);
	}

	return (
		<motion.div whileHover={{ scale: 1.02, transition: { duration: 0.3 }, opacity: 0.75 }} transition={{ duration: 0.5 }}>
			<div style={{ position: 'relative', width: '100%' }}>
				<$ContentItemHeaderDeleteIcon>
					{user?.id === item.author.id ? (
						isPendingDelete && deleteId === item.id ? (
							<Loader size={20} />
						) : (
							<RiDeleteBin6Line
								onClick={() => {
									handelClickMutateDelete();
								}}
								style={{ cursor: 'pointer', zIndex: 2, fontSize: '17px' }}
							/>
						)
					) : null}
				</$ContentItemHeaderDeleteIcon>
				<Link to={`/post/${item.id}`}>
					<$ContentItem>
						<$ContentItemHeader>
							<Link to={`/users/${item.author.id}`}>
								<$ContentItemHeaderUserInfo>
									<Avatar size='md' src={`${import.meta.env['VITE_BAC_STORE-IMG_URL']}${item.author.avatarUrl}`} alt="it's me" />
									<div>
										<$ContentItemHeaderUserInfoName>{item.author.name}</$ContentItemHeaderUserInfoName>
										<$ContentItemHeaderUserInfoDate>{new Date(item.createdAt).toLocaleDateString()}</$ContentItemHeaderUserInfoDate>
									</div>
								</$ContentItemHeaderUserInfo>
							</Link>
							<$ContentDescription>{item.content}</$ContentDescription>
						</$ContentItemHeader>
					</$ContentItem>
				</Link>
			</div>
		</motion.div>
	);
};
