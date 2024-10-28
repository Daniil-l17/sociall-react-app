import { Button, Skeleton } from '@mantine/core';
import { Logo } from '../Logo';
import { $HeaderWrapper } from './style';
import { useDisclosure } from '@mantine/hooks';
import { useAuth } from '../../hooks/userAuth';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import ModalAuth from '../../page/Home/components/ModalAuth';
import { motion } from 'framer-motion';
export const Header = () => {
	const [opened, { open, close }] = useDisclosure(false);
	const { user, isLoading } = useAuth();
	const queryClient = useQueryClient();

	const handelClicklogoutAccaunt = async () => {
		localStorage.removeItem('token');
		queryClient.invalidateQueries({ queryKey: ['userAuth'] });
		queryClient.clear();
		toast.error('Вы вышли из аккаунта', { theme: 'colored' });
	};

	return (
		<$HeaderWrapper>
			<ModalAuth close={close} opened={opened} />
			<Logo />
			<div>
				{isLoading ? (
					<Skeleton style={{ width: '90px' }} height={36} radius='4px' />
				) : (
					<motion.button whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} transition={{ duration: 0.4 }}>
						<Button w={90} onClick={user ? handelClicklogoutAccaunt : open} color={user ? 'red' : 'indigo'} radius='sm' variant='filled'>
							{user ? 'Выйти' : 'Войти'}
						</Button>
					</motion.button>
				)}
			</div>
		</$HeaderWrapper>
	);
};
