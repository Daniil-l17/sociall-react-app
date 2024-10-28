import { $Error, $ErrorText } from './style';

export const Error = () => {
	return (
		<$Error>
			<img width={300} height={200} src='/500.png' alt='' />
			<$ErrorText>Что-то пошло не так</$ErrorText>
		</$Error>
	);
};
