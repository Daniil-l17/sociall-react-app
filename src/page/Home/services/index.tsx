import { axiosBase } from '../../../config/axiosBase';

export interface posts {
	id: string;
	content: string;
	authorId: string;
	createdAt: string;
	likes: Like[];
	author: Author;
	comments: any[];
	likedByUser: boolean;
}

export interface Like {
	id: string;
	userId: string;
	postId: string;
}

export interface Author {
	id: string;
	email: string;
	password: string;
	name: string;
	avatarUrl: string;
	dateOfBirth?: string;
	createdAt: string;
	updatedAt: string;
	bio?: string;
	location?: string;
}

export interface Author {
	id: string;
	email: string;
	password: string;
	name: string;
	avatarUrl: string;
	createdAt: string;
	updatedAt: string;
}

export const PostsService = {
	posts: async () => {
		return (await axiosBase.get<posts[]>('/posts')).data;
	},
	createPost: async (content: string) => {
		return (await axiosBase.post<posts>('/posts', { content })).data;
	},
	currentPost: async (id: string) => {
		return (await axiosBase.get<posts>(`/posts/${id}`)).data;
	},
	deletePost: async (id: string) => {
		return (await axiosBase.delete<posts>(`/posts/${id}`)).data;
	},
	likePost: async (id: string) => {
		return (await axiosBase.post<posts>(`/likes`, { postId: id })).data;
	},
	deleteLikePost: async (id: string) => {
		return (await axiosBase.delete<posts>(`/likes/${id}`)).data;
	}
};
