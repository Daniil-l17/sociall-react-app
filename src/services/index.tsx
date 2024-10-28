import { axiosBase } from '../config/axiosBase';
import type { AuthDto, User } from './types';

export const AuhtService = {
	login: async (dto: Omit<AuthDto, 'name'>) => {
		return (await axiosBase.post<{ token: string }>('/login', dto)).data;
	},
	registr: (dto: AuthDto) => {
		return axiosBase.post('/register', dto);
	},
	currentUser: async () => {
		return (await axiosBase.get<User>('/current')).data;
	}
};
