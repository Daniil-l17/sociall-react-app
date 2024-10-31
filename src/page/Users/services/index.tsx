import { axiosBase } from '../../../config/axiosBase';
import { User } from '../../../services/types';

export const UsersService = {
	async getUserId(id: string) {
		const data = (await axiosBase.get<User>(`/users/${id}`)).data;
		return data;
	},
	async updateUser(dto: { name: string; id: string; dateOfBirth: Date | null; bio: string; location: string; avatarUrl: string }) {
		const data = (await axiosBase.put<User>(`/users/${dto.id}`, dto)).data;
		return data;
	},
	async followUser(followingId: string) {
		const data = (await axiosBase.post<User>(`/follow`, { followingId })).data;
		return data;
	},
	async unfollowUser(followingId: string) {
		const data = (await axiosBase.delete<User>(`/unfollow/${followingId}`)).data;
		return data;
	}
};
