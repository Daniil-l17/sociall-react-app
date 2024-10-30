import { FC } from 'react';
import { PropsCommentWrapper } from './types';
import { $CommentWrapper } from './style';
import { CommentItem } from '../CommentItem';

export const CommentWrapper: FC<PropsCommentWrapper> = ({ comments }) => {
	return (
		<$CommentWrapper>
			{comments.map(comment => (
				<CommentItem key={comment.id} comment={comment} />
			))}
		</$CommentWrapper>
	);
};
