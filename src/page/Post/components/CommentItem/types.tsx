import { UseMutateFunction } from '@tanstack/react-query';
import { User } from '../../../../services/types';
import { Comment } from '../../../Home/services';
import { AxiosResponse } from 'axios';

export type PropsCommentItem = {
	comment: Comment;
	isPending: boolean;
	user: User;
	mutate: UseMutateFunction<AxiosResponse<any, any>, Error, { id?: string | undefined; contentId?: string | undefined }, unknown>;
};
