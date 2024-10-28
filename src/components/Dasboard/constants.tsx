import { FaUserFriends } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { BiNews } from 'react-icons/bi';
import { IoMdCreate } from 'react-icons/io';

type menuDasboardType = {
	title: string;
	link?: string;
	icon: JSX.Element;
};

export const menuDasboard: menuDasboardType[] = [
	{ title: 'Посты', link: '/', icon: <BiNews style={{ fontSize: '22px' }} /> },
	{ title: 'Подписки', link: '/subscribers', icon: <FaUserFriends style={{ fontSize: '22px' }} /> },
	{ title: 'Подписчики', link: '32', icon: <MdGroups style={{ fontSize: '22px' }} /> },
	{ title: 'Создать пост', icon: <IoMdCreate style={{ fontSize: '22px' }} /> }
];
