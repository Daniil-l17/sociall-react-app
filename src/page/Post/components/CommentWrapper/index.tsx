import { FC } from 'react';
import { PropsCommentWrapper } from './types';
import { $CommentWrapper, $CommenTextNoComment } from './style';
import { CommentItem } from '../CommentItem';

export const CommentWrapper: FC<PropsCommentWrapper> = ({ comments, user, mutate, isPending }) => {
	if (!comments.length) return <$CommenTextNoComment>Комментов еще нет</$CommenTextNoComment>;

	return (
		<$CommentWrapper>
			{comments.map(comment => (
				<CommentItem isPending={isPending} mutate={mutate} user={user!} key={comment.id} comment={comment} />
			))}
		</$CommentWrapper>
	);
};
