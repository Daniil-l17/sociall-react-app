import { Skeleton } from '@mantine/core';
import { $HomeAvatarProfile, $AvatarProfile, $UserInfoWrrapper, $UserName, $UserEmail } from './style';
import { FC } from 'react';
import { ProfileUserProps } from './types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export const HomeProfileUser: FC<ProfileUserProps> = ({ user, isLoading }) => {
	return (
		<motion.div initial={{ opacity: 0 }} whileHover={{ scale: 1.02, transition: { duration: 0.2 } }} transition={{ duration: 0.5 }} animate={{ opacity: 1 }}>
			<Link to={`users/${user?.id}`}>
				<$HomeAvatarProfile>
					{isLoading ? <Skeleton width={240} height={280} radius='12px' /> : user ? <$AvatarProfile src={`${import.meta.env['VITE_BAC_STORE-IMG_URL']}${user?.avatarUrl}`} alt='' /> : null}
					<$UserInfoWrrapper>
						{isLoading ? (
							<>
								<Skeleton width={'100%'} height={12} mt={12} radius='12px' />
								<Skeleton width={'100%'} height={12} mt={6} radius='12px' />
							</>
						) : (
							<>
								<$UserName className=' text-lg font-medium'>{user?.name}</$UserName>
								<$UserEmail className=' text-[#919191] font-medium'>@{user?.email}</$UserEmail>
							</>
						)}
					</$UserInfoWrrapper>
				</$HomeAvatarProfile>
			</Link>
		</motion.div>
	);
};
