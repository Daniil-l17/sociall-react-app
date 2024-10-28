import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/userAuth';
import { $HomeAvatarProfile, $AvatarProfile, $AvatarProfileWrapper, $UserInfoWrrapper, $UserName, $UserEmail } from './style';
export const Subscribers = () => {
	const { user } = useAuth();
	return (
		<$AvatarProfileWrapper>
			{!user
				? null
				: user.following.map(item => {
						return (
							<Link id={item.id} to={`/users/${item.following.id}`}>
								<$HomeAvatarProfile>
									<$AvatarProfile src={`${import.meta.env['VITE_BAC_STORE-IMG_URL']}${item.following.avatarUrl}`} alt='' />
									<$UserInfoWrrapper>
										<$UserName className=' text-lg font-medium'>{item.following.name}</$UserName>
										<$UserEmail className=' text-[#919191] font-medium'>@{item.following.email}</$UserEmail>
									</$UserInfoWrrapper>
								</$HomeAvatarProfile>
							</Link>
						);
				  })}
		</$AvatarProfileWrapper>
	);
};
