import { axiosBase } from '../../../config/axiosBase';

export const PostServiceComment = {
	async createComment(id: string, content: string) {
		return axiosBase.post('/comments', { postId: id, content });
	},
	deleteComment(id: string) {
		return axiosBase.delete(`/comments/${id}`);
	}
};
