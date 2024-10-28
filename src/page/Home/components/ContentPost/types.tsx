import { User } from '../../../../services/types';
import { posts } from '../../services';

export type ContentitemProps = {
	item: posts;
	isPendingDelete: boolean;
	mutateDelete: (id: string) => void;
	user: User;
};
