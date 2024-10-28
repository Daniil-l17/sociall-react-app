import { User } from '../../../../services/types';

export type ModalUpdateProfileType = {
	opened: boolean;
	close: () => void;
	data: User | null;
};
