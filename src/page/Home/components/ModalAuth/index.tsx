import { Button, Input, Modal } from '@mantine/core';
import { FC, useEffect, useState } from 'react';
import { $ModalAuthInfoRegistration, $ModalAuthWrapper, $ModalAuthInputError, $ModalAuthWrapperInput, $ModalAuthInputItem } from './style';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AuhtService } from '../../../../services';
import { toast } from 'react-toastify';
import { Inputs, ModalAuthProps } from './types';

const ModalAuth: FC<ModalAuthProps> = ({ close, opened }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors }
	} = useForm<Inputs>();
	const queryClient = useQueryClient();

	const [auth, setAuth] = useState<'login' | 'register'>('login');

	useEffect(() => {
		if (!opened) {
			setAuth('login');
		}
	}, [opened]);

	const { mutate, isPending } = useMutation({
		mutationKey: ['auth'],
		mutationFn: async (dto: Inputs) => {
			if (auth === 'login') return await AuhtService.login(dto);
			return await AuhtService.registr(dto);
		},
		onSuccess: req => {
			if ('token' in req) {
				if (auth === 'login') {
					localStorage.setItem('token', req.token);
					close();
					queryClient.invalidateQueries({ queryKey: ['userAuth'] });
					queryClient.invalidateQueries({ queryKey: ['postsAll'] });
				}
			} else {
				setAuth('login');
			}
			reset();
			toast.success(auth === 'register' ? 'Вы вошли в аккаунт' : 'Вы зарегистрировались', { theme: 'colored' });
		},
		onError: () => {
			toast.error(auth === 'login' ? 'Неверный логин или пароль' : 'Пользователь с таким email уже существует', { theme: 'colored' });
		}
	});

	const onSubmit = (data: Inputs) => {
		mutate(data);
	};

	return (
		<Modal
			size={'lg'}
			overlayProps={{
				backgroundOpacity: 0.55,
				blur: 3
			}}
			opened={opened}
			centered
			onClose={close}
			title={auth === 'login' ? 'Вход' : 'Регистрация'}
		>
			<$ModalAuthWrapper onSubmit={handleSubmit(onSubmit)}>
				<$ModalAuthWrapperInput>
					{auth === 'register' && (
						<$ModalAuthInputItem>
							<Input {...register('name', { required: true })} placeholder='Имя' />
							{errors.name && <$ModalAuthInputError>Это поле обязательно</$ModalAuthInputError>}
						</$ModalAuthInputItem>
					)}
					<$ModalAuthInputItem>
						<Input {...register('email', { required: true })} placeholder='Email' />
						{errors.email && <$ModalAuthInputError>Это поле обязательно</$ModalAuthInputError>}
					</$ModalAuthInputItem>
					<$ModalAuthInputItem>
						<Input {...register('password', { required: true, minLength: 6 })} placeholder='Пароль' />
						{errors.password && <$ModalAuthInputError>Это поле обязательно</$ModalAuthInputError>}
					</$ModalAuthInputItem>
				</$ModalAuthWrapperInput>
				<$ModalAuthInfoRegistration onClick={() => setAuth(prev => (prev === 'login' ? 'register' : 'login'))}>{auth === 'login' ? 'нет аккаунта?' : 'уже есть аккаунт?'}</$ModalAuthInfoRegistration>
				<Button loading={isPending} type='submit'>
					{auth === 'login' ? 'Войти' : 'Зарегистрироваться'}
				</Button>
			</$ModalAuthWrapper>
		</Modal>
	);
};

export default ModalAuth;
