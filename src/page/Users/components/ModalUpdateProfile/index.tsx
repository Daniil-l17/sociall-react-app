import { Button, FileInput, Input, Modal } from '@mantine/core';
import { FC, useEffect, useState } from 'react';
import { User } from '../../../../services/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UsersService } from '../../services';
import { DateInput } from '@mantine/dates';
import axios from 'axios';
import { ModalUpdateProfileType } from './types';
import { $ModalUpdateProfileInputWrapper } from './style';

export const ModalUpdateProfile: FC<ModalUpdateProfileType> = ({ opened, close, data }) => {
	const [userInfo, setUserInfo] = useState({} as { name: string; dateOfBirth: Date; bio: string; location: string; avatarUrl: string });

	const queryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationKey: ['updateProfile'],
		mutationFn: async (dto: User) => {
			return await UsersService.updateUser(dto);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['users'] });
			close();
		}
	});

	const handelChangeUpdateProfileImage = (files: any) => {
		const formData = new FormData();
		formData.append('image', files);
		try {
			axios.post(`${import.meta.env['VITE_BAC_UPLOAD_URL']}`, formData);
			setUserInfo(prev => ({ ...prev, avatarUrl: `/uploads/${files.name}` }));
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		if (data) {
			setUserInfo({ name: data?.name ?? '', dateOfBirth: data?.dateOfBirth ?? '', bio: data?.bio ?? '', location: data?.location ?? '', avatarUrl: data?.avatarUrl ?? '' });
		}
	}, [data, isPending]);

	function handalChangeUserInfo(e: React.ChangeEvent<HTMLInputElement>) {
		setUserInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));
	}

	return (
		<Modal opened={opened} centered size={'lg'} onClose={close} title='Изменить профиль'>
			<$ModalUpdateProfileInputWrapper>
				<Input onChange={handalChangeUserInfo} placeholder='имя' name='name' value={userInfo.name} />
				<FileInput onChange={handelChangeUpdateProfileImage} accept='image/png,image/jpeg' placeholder='Загрузить фото' />
				<DateInput placeholder='дата рождения' onChange={event => setUserInfo({ ...userInfo, dateOfBirth: event })} value={userInfo.dateOfBirth ? new Date(userInfo.dateOfBirth) : undefined} />
				<Input onChange={handalChangeUserInfo} placeholder='биография' name='bio' value={userInfo.bio} />
				<Input onChange={handalChangeUserInfo} placeholder='место жительства' name='location' value={userInfo.location} />
			</$ModalUpdateProfileInputWrapper>
			<Button loading={isPending} onClick={() => mutate({ ...userInfo, id: data?.id ?? '' })} fullWidth>
				обновить профиль
			</Button>
		</Modal>
	);
};
