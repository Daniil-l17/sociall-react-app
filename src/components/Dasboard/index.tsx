import { menuDasboard } from './constants';
import { Link, useLocation } from 'react-router-dom';
import { css } from '@emotion/css';
import { $DasboardWrapper, $DasboardItemText } from './style';
import { useAuth } from '../../hooks/userAuth';
import { Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { CreatePostModal } from '../CteatePostModal';
import { motion } from 'framer-motion';

export const Dasboard = () => {
	const { user, isLoading } = useAuth();
	const { pathname } = useLocation();
	const [opened, { open, close }] = useDisclosure(false);

	const variantsAnimate = {
		initialElement: { opacity: 0, scale: 0 },
		animateElement: (i: number = 0.3) => ({ opacity: 1, scale: 1, transition: { duration: 0.3, delay: i * 0.2, ease: 'easeOut' } })
	};

	return (
		<$DasboardWrapper>
			<CreatePostModal close={close} opened={opened} />
			{isLoading ? (
				<>
					<Skeleton height={50} w={190} radius='8px' />
					<Skeleton height={50} w={190} radius='8px' />
					<Skeleton height={50} w={190} radius='8px' />
					<Skeleton height={50} w={190} radius='8px' />
				</>
			) : user ? (
				menuDasboard.map((item, index) => {
					if (!item.link) {
						return (
							<motion.div
								onClick={() => {
									open();
								}}
								initial={'initialElement'}
								animate={'animateElement'}
								custom={index - 2}
								variants={variantsAnimate}
								key={index}
								className={`${css({
									transition: 'all 0.3s ease-in-out',
									cursor: 'pointer',
									borderRadius: '8px',
									display: 'flex',
									alignItems: 'center',
									gap: '14px',
									padding: '5px 10px',
									width: '190px',
									height: '50px',
									color: 'white',
									backgroundColor: item.link === pathname ? '#262626' : '',
									':hover': {
										scale: '1.05',
										backgroundColor: item.link === pathname ? '#262626' : '#2e2e2e'
									}
								})}`}
							>
								{item.icon}
								<$DasboardItemText>{item.title}</$DasboardItemText>
							</motion.div>
						);
					}
					return (
						<motion.div variants={variantsAnimate} initial={'initialElement'} animate={'animateElement'} custom={index} key={index}>
							<Link
								className={`${css({
									transition: 'all 0.3s ease-in-out',
									cursor: 'pointer',
									borderRadius: '8px',
									display: 'flex',
									alignItems: 'center',
									gap: '14px',
									padding: '5px 10px',
									width: '190px',
									height: '50px',
									color: 'white',
									backgroundColor: item.link === pathname ? '#262626' : '',
									':hover': {
										scale: '1.05',
										backgroundColor: item.link === pathname ? '#262626' : '#2e2e2e'
									}
								})}`}
								to={item.link}
							>
								{item.icon}
								<$DasboardItemText>{item.title}</$DasboardItemText>
							</Link>
						</motion.div>
					);
				})
			) : (
				<motion.div variants={variantsAnimate} initial={'initialElement'} animate={'animateElement'}>
					<Link
						className={`${css({
							transition: 'all 0.3s ease-in-out',
							cursor: 'pointer',
							borderRadius: '8px',
							display: 'flex',
							alignItems: 'center',
							gap: '14px',
							padding: '5px 10px',
							width: '190px',
							height: '50px',
							color: 'white',
							backgroundColor: '#262626',
							':hover': {
								scale: '1.05',
								backgroundColor: '#262626'
							}
						})}`}
						to={menuDasboard[0].link!}
					>
						{menuDasboard[0].icon}
						<$DasboardItemText>{menuDasboard[0].title}</$DasboardItemText>
					</Link>
				</motion.div>
			)}
		</$DasboardWrapper>
	);
};
