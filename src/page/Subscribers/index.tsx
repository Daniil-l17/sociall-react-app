import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/userAuth';
import { $HomeAvatarProfile, $AvatarProfile, $SubscribersText, $LoaderWrapper, $AvatarProfileWrapper, $UserInfoWrrapper, $UserName, $UserEmail } from './style';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Loader } from '@mantine/core';
export const Subscribers = () => {
	const { user, isFetching } = useAuth();
	const navigate = useNavigate();

	const { pathname } = useLocation();

	useEffect(() => {
		if (!isFetching && !user) {
			navigate('/');
		}
	}, [isFetching, user]);

	if (isFetching) {
		return (
			<$LoaderWrapper>
				<Loader size={30} />
			</$LoaderWrapper>
		);
	}

	if (!user) return null;

	return (
		<$AvatarProfileWrapper>
			{user[pathname === '/subscribers' ? 'following' : 'followers'].length ? (
				pathname === '/subscribers' ? (
					user.following.map(item => {
						return (
							<motion.div initial={{ opacity: 0.4 }} animate={{ opacity: 1 }} key={item.id} whileHover={{ scale: 1.02, transition: { duration: 0.4 } }} transition={{ duration: 0.4 }}>
								<Link to={`/users/${item.following.id}`}>
									<$HomeAvatarProfile>
										<$AvatarProfile src={`${import.meta.env['VITE_BAC_STORE-IMG_URL']}${item.following.avatarUrl}`} alt='' />
										<$UserInfoWrrapper>
											<$UserName className=' text-lg font-medium'>{item.following.name}</$UserName>
											<$UserEmail className=' text-[#919191] font-medium'>@{item.following.email}</$UserEmail>
										</$UserInfoWrrapper>
									</$HomeAvatarProfile>
								</Link>
							</motion.div>
						);
					})
				) : (
					user.followers.map(item => {
						return (
							<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={item.id} whileHover={{ scale: 1.02, transition: { duration: 0.3 } }} transition={{ duration: 0.5 }}>
								<Link to={`/users/${item.follower.id}`}>
									<$HomeAvatarProfile>
										<$AvatarProfile src={`${import.meta.env['VITE_BAC_STORE-IMG_URL']}${item.follower.avatarUrl}`} alt='' />
										<$UserInfoWrrapper>
											<$UserName className=' text-lg font-medium'>{item.follower.name}</$UserName>
											<$UserEmail className=' text-[#919191] font-medium'>@{item.follower.email}</$UserEmail>
										</$UserInfoWrrapper>
									</$HomeAvatarProfile>
								</Link>
							</motion.div>
						);
					})
				)
			) : (
				<$SubscribersText>{pathname === '/subscribers' ? 'Вы не на кого не подписанны' : 'На вас никто не подписан'}</$SubscribersText>
			)}
		</$AvatarProfileWrapper>
	);
};
