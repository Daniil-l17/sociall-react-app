export type ModalAuthProps = {
	opened: boolean;
	close: () => void;
};

export type Inputs = {
	name?: string;
	email: string;
	password: string;
};
