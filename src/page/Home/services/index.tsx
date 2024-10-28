import { axiosBase } from '../../../config/axiosBase';

export interface posts {
	id: string;
	content: string;
	authorId: string;
	createdAt: string;
	likes: any[];
	author: Author;
	comments: any[];
	likedByUser: boolean;
}

export interface Author {
	id: string;
	email: string;
	password: string;
	name: string;
	avatarUrl: string;
	dateOfBirth: any;
	createdAt: string;
	updatedAt: string;
	bio: any;
	location: any;
}

export const PostsService = {
	posts: async () => {
		return (await axiosBase.get<posts[]>('/posts')).data;
	},
	createPost: async (content: string) => {
		return (await axiosBase.post<posts>('/posts', { content })).data;
	},
	deletePost: async (id: string) => {
		return (await axiosBase.delete<posts>(`/posts/${id}`)).data;
	}
};
